
import { fetchData, fetchJson, getUrl } from '../app/transport';

import 'isomorphic-fetch';

import log from '../react/webpack/logn';

export const data = {
    laststatus  : 10,
    interval    : 11,
    url         : `http://test-example.com`,
};

export const clear = (url = data.url) => list()
    .then(res => res.filter(row => row.url === url))
    .then(list => list.pop())
    .then(endpoint => {
        if (endpoint) {

            const status = remove(endpoint._id);

            status.then(status => expect(status).toEqual(204));

            return status;
        }
        else {

            return Promise.resolve();
        }
    })
;

export const find = (id, raw) => {

    const res = fetchData(`/page/${id}`, {
        headers: {
            Accept: 'application/json' // only send json
        }
    });

    res.catch(res => log.dump('find() error:', res));

    if (raw) {

        return res;
    }

    return res
        .then(res => res.json())
        .then(data => data.data)
    ;
};

export const remove = (id, raw) => {

    const res = fetchData(`/page/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json' // only send json
        }
    });

    res.catch(res => log.dump('remove() error:', res));

    if (raw) {

        return res;
    }

    return res.then(res => res.status);
}

export const list = raw => {

    const res = fetchData('/pages', {
        headers: {
            Accept: 'application/json' // only send json
        }
    });

    res.catch(res => log.dump('list() error:', res));

    if (raw) {

        return res;
    }

    return res
        .then(res => res.json())
        .then(data => data.data)
    ;
}


export const options = (url, method) => fetch(getUrl(url), {
    method: 'OPTIONS',
    headers: {
        'Access-Control-Request-Method' : method
    }
});

export const create = (json = data, raw) => {

    const res = fetchData(`/page`, {
        method : 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            data: json
        } || {})
    });

    res.catch(res => log.dump('create() error:', res));

    if (raw) {

        return res;
    }

    return res
        .then(res => res.json())
        .then(data => data.data)
    ;
};

export const edit = (id, json = data, raw) => {

    const res = fetchData(`/page/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            data: json
        } || {})
    });

    res.catch(res => log.dump('edit() error:', res));

    if (raw) {

        return res;
    }

    return res.then(res => res.status === 204);
}