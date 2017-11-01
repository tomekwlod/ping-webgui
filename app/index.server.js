'use strict';

import path from 'path';

import fs from 'fs';

import React from 'react';

import serialize from 'serialize-javascript';

import express from 'express';

import bodyParser from 'body-parser';

import config from '../react/config';

import 'colors';

import RootServer from './components/RootServer';

import configureStore, { fetchData } from './configureStore';

import { StaticRouter } from 'react-router';

import { renderToString } from 'react-dom/server';

// import sourceMapSupport from "source-map-support";

// if (process.env.NODE_ENV === 'development') {
//
//     sourceMapSupport.install();
// }

const ip    = config.server.host;
const port  = config.server.port;


process.on('uncaughtException', function (e) {
    switch (true) {
        case (e.code === 'EADDRINUSE' && e.errno === 'EADDRINUSE'):
            process.stdout.write(`\naddress ${ip}:${port} already in use - server killed\n\n`.red);
            break;
        case (e.code === 'EACCES' && e.errno === 'EACCES'):
            process.stdout.write(`\nno access to take ${ip}:${port} address - server killed - (use sudo)\n\n`.red);
            break;
        default:
            throw e;
    }
});

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(express.static(config.web));

app.use((req, res) => {

    const store = configureStore();

    fetchData(req.url, store).then(() => {

        const context = {};

        let html = renderToString(<RootServer
            store={store}
            location={req.url}
            context={context}
        />);

        let htmlTemplate = path.resolve((__filename.replace(/^(.*)\.[^\.]+$/g, '$1')) + '.html');

        htmlTemplate = fs.readFileSync(htmlTemplate).toString();

        // window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\\\\u003c')};

        const replace = {
            html,
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            data: `<script>window.__PRELOADED_STATE__ = ${serialize(store.getState())};</script>`
        };

        Object.keys(replace).forEach(i => {
            htmlTemplate = htmlTemplate.replace(`{{${i}}}`, replace[i]);
        });

        res.send(htmlTemplate);
    });
});

app.listen(port, ip, () => {

    console.log(`Server is running ${ip}:${port}`.blue)
});
