'use strict';

import path from 'path';

import fs from 'fs';

import React from 'react';

import serialize from 'serialize-javascript';

import express from 'express';

import jwt from 'jsonwebtoken'

import compression from 'compression';

import bodyParser from 'body-parser';

import configWebpack from '../react/config';

import configPublic from './public.config';

import configServer from './server.config';

import RootServer from './components/RootServer';

import configureStore, { fetchData } from './configureStore';

import { StaticRouter } from 'react-router';

import 'colors';

import { renderToString } from 'react-dom/server';

import sourceMapSupport from "source-map-support";

import favicon          from 'serve-favicon';

import { ServerStyleSheet } from 'styled-components'

import { loginSuccess } from './actions';

if (process.env.NODE_ENV === 'development') {

    sourceMapSupport.install();
}

const host    = configWebpack.server.host;
const port  = configWebpack.server.port;

process.on('uncaughtException', function (e) {
    switch (true) {
        case (e.code === 'EADDRINUSE' && e.errno === 'EADDRINUSE'):
            process.stdout.write(`\naddress ${host}:${port} already in use - server killed\n\n`.red);
            break;
        case (e.code === 'EACCES' && e.errno === 'EACCES'):
            process.stdout.write(`\nno access to take ${host}:${port} address - server killed - (use sudo)\n\n`.red);
            break;
        default:
            throw e;
    }
});

const app = express();

app.use(compression({filter: (req, res) => {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
    }

    // fallback to standard filter function
    return compression.filter(req, res)
}}));

app.use(favicon(path.resolve(configWebpack.web, 'favicon.ico')))

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(express.static(configWebpack.web));

// login & check token

const headerName = `Authorization`;
app.use((req, res, next) => {

    try {
        if (
            req.body[configPublic.jwt.loginHiddenInput.name]
            === configPublic.jwt.loginHiddenInput.value
        ) {

            const user = configServer.jwt.users.find(user => (
                (user.username === req.body.username)
                &&
                (user.password === req.body.password)
            ));

            if (user) {

                const payload = { // directly for loginSuccess redux action
                    username: user.username
                    // role and other
                };

                const token = jwt.sign(
                    payload,
                    configServer.jwt.secret,
                    {
                        expiresIn: configServer.jwt.tokenExpireAfter
                    }
                );

                if (configPublic.jwt.postToGetReloadShortcut) {

                    if ((req.get('accept') || '').toLowerCase().split(',').indexOf('text/html') > -1) {

                        res.set('Content-Type', 'text/html');

                        return res.end(`<script>try{localStorage.setItem('${configPublic.jwt.localStorageKey}','${token}');location.href = location.href;}catch(e){document.write = "Error: Can't create localstorage session...";}</script>`);
                    }
                }

                // res.setHeader(headerName, `Bearer ${token}`);

                // building __JWT_TOKEN__
                // to hydrate loginSuccess redux action
                res[headerName] = token;
            }
            else {

                // invalid credentials, in other words: login failed
                res[headerName] = false;
            }
        }
    }
    catch (e) {

        console.log('JWT login error', e);
    }

    // res.set('X-test', 'testvaluse');
    //
    // console.log('baseUrl', req.baseUrl);
    // console.log('url', req.url);
    // console.log('originalUrl', req.originalUrl);

    next();
});

app.use((req, res) => {

    // read later: TTFB https://hackernoon.com/whats-new-with-server-side-rendering-in-react-16-9b0d78585d67#ee91
    // if we want to handle 301 or 404 i you shouldnt use TTFB

    const store = configureStore();

    // data received from authentication middleware
    let data;
    if (res[headerName] !== undefined) {

        data = res[headerName];

        if (data && data.token && data.payload) {

            store.dispatch(loginSuccess(data));
        }
    }

    fetchData(req.url, store).then(() => {

        const context = {};

        const sheet = new ServerStyleSheet();

        let html = renderToString(sheet.collectStyles(<RootServer
            store={store}
            location={req.url}
            context={context}
        />));

        // https://www.styled-components.com/docs/advanced#server-side-rendering
        const styleTags = sheet.getStyleTags();

        let htmlTemplate = path.resolve(configWebpack.app, 'index.server.html');

        htmlTemplate = fs.readFileSync(htmlTemplate).toString();

        // window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\\\\u003c')};

        let scriptWithPayload = '';

        if (data !== undefined) {

            // it's gonna show only on response after post valid request to login
            scriptWithPayload = `<script>window.__JWT_TOKEN__ = ${serialize(data)};</script>`;
        }

        const replace = {
            html,
            styleTags,
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            data: `<script>window.__PRELOADED_STATE__ = ${serialize(store.getState())};</script>${scriptWithPayload}`
        };

        Object.keys(replace).forEach(i => {
            htmlTemplate = htmlTemplate.replace(`{{${i}}}`, replace[i]);
        });

        res.send(htmlTemplate);
    });
});

app.listen(port, host, () => {

    console.log(`\n 🌎  [${(new Date()).toISOString().replace(/^(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})\.\d*Z$/, '$1 $2')}] Server is running `.green + `${host}:${port}\n`.blue)
});


