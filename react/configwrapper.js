
import * as config from './app.config';

export const getUrl = (path = '') => {

    if (/^https?:\/\//.test(path)) {

        return path;
    }

    return `http://${config.pingserver}${path}`;
}

export const fetchJson = (path, opt, ...args) => {

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

    log('fetchJson', args)

    return fetch(...args).then(res => res.json())
};

