/**
 * @author Szymon Działowski
 * @license MIT License (c) copyright 2017-present original author or authors
 * @homepage https://github.com/stopsopa/webpack3
 */

'use strict';

const path                  = require('path');
const webpack               = require('webpack');
const utils                 = require(path.resolve('webpack', "utils"));
const ExtractTextPlugin     = require("extract-text-webpack-plugin");
const CleanWebpackPlugin    = require('clean-webpack-plugin');
const UglifyJSPlugin        = require('uglifyjs-webpack-plugin');
const NodeExternals         = require('webpack-node-externals');
// const log                   = require(path.resolve('webpack', 'logn'));
const ReloadServerPlugin    = require('reload-server-webpack-plugin');
require('colors');

const node_modules = path.join(__dirname, 'node_modules');

utils.setup(path.resolve('config.js'));

/**
 * common
 */
const commonRules = [
    {
        // https://babeljs.io/docs/plugins/transform-object-rest-spread/
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: path.resolve(node_modules, 'babel-loader'),
            options: {
                babelrc: false,
                presets: [
                    path.resolve(node_modules, 'babel-preset-env'),
                    path.resolve(node_modules, 'babel-preset-es2015'),
                    path.resolve(node_modules, 'babel-preset-react'),
                    path.resolve(node_modules, 'babel-preset-stage-0')
                ],
                plugins: [
                    path.resolve(node_modules, 'babel-plugin-transform-decorators-legacy'),
                ],
                sourceMap: utils.prod
            }
        }
    },
    {
        test: /\.(jpe?g|gif|png|eot|woff2?|ttf|svg)$/,
        // loader: 'file-loader?emitFile=false&name=[path][name].[ext]',
        use: {
            loader: path.resolve(node_modules, 'file-loader'),
            options: { // https://github.com/webpack-contrib/file-loader/tree/docs
                emitFile: false,
                name: '[path][name].[ext]',
                publicPath: '/',
                context: utils.config.web,
                useRelativePath: false,
                sourceMap: utils.prod
            }
        }

    }
];

const resolve = {
    modules: (function () {

        console.log('Mounting symlinks:');

        console.log("\n    assets:");

        utils.symlink(utils.config.asset, true);

        console.log("\n    resolver:");

        const list = utils.symlink(utils.config.resolve);

        console.log("\n");

        return list;
    }()),
    extensions: ['.js', '.jsx', '.json'],
    symlinks: false // to properly resolve url() in css/scss through web symlink
};

/**
 * web
 */
const web = {
    name: `[${utils.config.name}]`.blue + ` browser bundling`.yellow,
    entry: utils.entries(),
    output: {
        path: utils.config.js.outputForWeb,
        filename: "[name].bundle.js",
    },
    resolve: Object.assign({}, resolve),
    devtool: false,
    module: {
        rules: [
            ...commonRules,
            {
                // https://webpack.js.org/loaders/style-loader/
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    fallback: {
                        loader: path.resolve(node_modules, 'style-loader'),
                        options: {
                            sourceMap: utils.prod,
                        }
                    },
                    use: [
                        {
                            loader: path.resolve(node_modules, 'css-loader'),
                            options: {
                                minimize: utils.prod,
                                sourceMap: utils.prod,
                            }
                        },
                        {
                            loader: path.resolve(node_modules, 'sass-loader'),
                            options: {
                                sourceMap: utils.prod
                            }
                        }
                    ]
                }),
            },
            {
                // https://webpack.js.org/loaders/style-loader/
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: {
                        loader: path.resolve(node_modules, 'style-loader'),
                        options: {
                            sourceMap: utils.prod,
                        }
                    },
                    use: [
                        {
                            loader: path.resolve(node_modules, 'css-loader'),
                            options: {
                                minimize: utils.prod,
                                sourceMap: utils.prod,
                            }
                        }
                    ]
                }),
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([utils.config.js.outputForWeb], {
            root: utils.config.root
        }),
        new ExtractTextPlugin("[name].bundle.css"),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(utils.prod ? 'production' : 'development')
            }
        })
    ]
};
if (utils.config.provideForWeb && Object.keys(utils.config.provideForWeb).length) { // https://webpack.js.org/plugins/provide-plugin/

    web.plugins.push(new webpack.ProvidePlugin(utils.config.provideForWeb));
}
if (utils.prod) {

    // https://webpack.js.org/configuration/devtool/
    // http://cheng.logdown.com/posts/2016/03/25/679045
    // devtool: "eval-source-mahhp"
    // devtool: "cheap-eval-source-map"
    web.devtool = "source-map";

    web.plugins.push(new UglifyJSPlugin({
        sourceMap: true
    }));
}

if (utils.config.aliasForWeb && Object.keys(utils.config.aliasForWeb).length) {

    web.resolve.alias = utils.config.aliasForWeb;
}

const webpackConfigsList = [web];

const serverEndpoints = utils.entries("/**/*.server.{js,jsx}", true);

if (Object.keys(serverEndpoints).length) {

    /**
     * server
     */
    const server = {
        name: `[${utils.config.name}]`.blue + ` server-side rendering`.yellow,
        entry: serverEndpoints,
        target: 'node',
        node: {
            // https://github.com/webpack/webpack/issues/1599
            __dirname: true,
            __filename: true
        },
        externals: [ NodeExternals() ],
        output: {
            path: path.resolve(__dirname),
            filename: "[name].server.js",
            libraryTarget: 'commonjs2'
        },
        resolve : (() => {

            const list = Object.assign({}, resolve, {
                alias: utils.config.aliasForWeb || {}
            });

            list.alias.log = path.resolve(__dirname, 'webpack', 'logn');

            return list;
        })(),
        devtool: false,
        module: {
            rules: [
                ...commonRules,
                {
                    // https://webpack.js.org/loaders/style-loader/
                    test: /\.s?css$/,
                    loader: path.resolve(node_modules, 'css-loader/locals')
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(utils.prod ? 'production' : 'development')
                }
            }),
            new webpack.ProvidePlugin({
                log: 'log'
            })
        ]
    }

    if ( (process.argv.indexOf('--watch') > -1) && utils.config.server && utils.config.server.watchAndReload) {

        server.plugins.push(new ReloadServerPlugin({
            script: utils.config.server.watchAndReload,
        }));
    }

    webpackConfigsList.push(server);
}
else {

    console.log("Server side webpack config ignored - *.server.js not found\n".red);
}

module.exports = webpackConfigsList;
