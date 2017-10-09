'use strict';

const path              = require('path');
const fs                = require('fs');
const bodyParser        = require('body-parser');
const express           = require('express');
const compression       = require('compression');
const config            = require(path.resolve(__dirname, 'config'));
const proxy             = require('express-http-proxy');
const colors            = require('colors');
const appconfig         = require('../app/config.js');
const favicon           = require('serve-favicon')

const
    ip      = process.argv[2],
    port    = parseInt(process.argv[3])
;

process.on('uncaughtException', function (e) {
    switch (true) {
        case (e.code === 'EADDRINUSE' && e.errno === 'EADDRINUSE'):
            process.stdout.write(`address ${ip}:${port} already in use - server killed\n\n`);
            break;
        case (e.code === 'EACCES' && e.errno === 'EACCES'):
            process.stdout.write(`no access to take ${ip}:${port} address - server killed - (use sudo)\n\n`);
            break;
        default:
            throw e;
    }
});

if ( ! (process.argv.length > 3) ) {

    throw "try to call for example 'node " + path.basename(__filename) + " 0.0.0.0 80'";
}

// http://www.w3resource.com/javascript/form/ip-address-validation.php
if ( ! /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {

    throw `first argument should have format of ip address eg: 127.168.10.105 and is '${ip}'`;
}


if ( port < 0 || port > 65535 ) {

    throw "port beyond range 0 - 65535 : '" + port + "'";
}

// console.log(JSON.stringify(config, null, '    '));
// process.exit(0);

const app = express();

app.use(compression({filter: shouldCompress}));

app.use(favicon(path.join(config.web, 'favicon.ico')))

function shouldCompress (req, res) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
    }

    // fallback to standard filter function
    return compression.filter(req, res)
}

app.all(/^\/(gui)\/?/, (req, res) => {
// app.all(/^\/(redux|router)\/([^\/]+)\/(.*)?$/, (req, res) => {

    // const dir = path.join(req.params[0], req.params[1]);
    const dir = '/';

    // https://expressjs.com/en/4x/api.html#res.sendFile

    const rel   = path.join(dir, 'index.html');

    // log('rel', rel);
    // log('web', config.web)

    const file  = path.join(config.web, rel);

    // log('file', file, fs.existsSync(file) ? 'true' : 'false');

    if (fs.existsSync(file)) {

        const options = {
            root: config.web,
            // dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        };

        let html = fs.readFileSync(file);

        if (/<div id="apdp"><\/div>/.test(html)) {


        }
        else {
            res.set({
                'Content-type' : 'text/html; charset=utf-8'
            })
                .send(html);
        }

        // res.sendFile(rel, options, function (err) {
        //     if (err) {
        //         log('error', err)
        //         // next(err);
        //     } else {
        //         // log('Sent:', file);
        //     }
        // });
    }
    else {

        res.send(`File '${file}' doesn't exist`);
    }
});

app.use('/proxy', proxy(appconfig.pingserver, {
    // proxyReqPathResolver: function(req) {
    //
    //     // log('url: ', req.url);
    //     // log('path: ', url.parse(req.url).path);
    //     // log('method', req.method);
    //
    //     return url.parse(req.url).path;
    // }
}));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json()); // https://github.com/expressjs/body-parser#expressconnect-top-level-generic

app.use(express.static(config.web));

app.listen(port, ip, () => {
    console.log(`Server is running ${ip}:${port}`)
});
