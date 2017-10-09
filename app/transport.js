
import * as config from './config';

import 'isomorphic-fetch';

export const delay = config.delay;

import delayPromise from '../react/webpack/delay';

export const getUrl = (path = '') => {

    if (/^https?:\/\//.test(path)) {

        return path;
    }

    return `http://${config.pingserver}${path}`;
}

export const fetchData = (path, opt, ...args) => {

    args = [
        getUrl(path),
        {
            headers: {
                Accept: 'application/json',
            },
            ...opt
        },
        ...args
    ];

    if (args[1].method) {

        args[1].method = args[1].method.toUpperCase();
    }

    return delayPromise(delay || 0)
        .then(() => fetch(...args))
    ;
};

export const fetchJson = (...args) => fetchData(...args).then(res => res.json());

