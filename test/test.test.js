'use strict';

import log from '../react/webpack/logn';

import isObject from 'lodash/isObject';

import { data, edit, clear, create, list, remove, options, find } from './test-api';

import delay from '../react/webpack/delay';

const headers = res => {

    expect(isObject(res.headers)).toBeTruthy();

    expect(isObject(res.headers._headers)).toBeTruthy();

    const headers = res.headers._headers;

    expect(headers['access-control-allow-headers'][0]).toEqual('Origin, X-Requested-With, Content-Type, Accept');
    expect(headers['access-control-allow-methods'][0]).toEqual('POST, DELETE, PUT');
    expect(headers['access-control-allow-origin'][0]).toEqual('*');

    return Promise.resolve();
}

let id;

describe('GET /pages', () => {

    let urls = [
        data.url,
        data.url + '2',
        data.url + '3'
    ];

    const cl = () => Promise.all([...urls].map(url => clear(url)));

    beforeEach(cl);

    afterAll(cl);

    it('options GET', () => options('/pages', 'GET').then(headers));

    it('status, execute and headers', () => {

        let tmp;

        return Promise.all(
            [...urls].map(url => create({
                ...data,
                url
            }))
        )
        .then(created => {

            tmp = created;

            return list(true);
        })
        .then(res => {

            headers(res);

            return res.json();
        })
        .then(json => json.data)
        .then(list => tmp.map(entity =>
            list.filter(row =>
                entity.url === row.url
            ).length > 0
        ))
        .then(data => data.filter(v => v === true).length)
        .then(length => expect(length).toBe(3))
    });
});

describe('GET /page/{id}', () => {

    beforeEach(clear);

    afterAll(clear);

    it('options GET', () => options('/page/testid', 'GET').then(headers));

    it('status, execute and headers', () => create()
        .then(row => find(row._id, true))
        .then(res => {

            headers(res);

            return res.status;
        })
        .then(status => expect(status).toEqual(200))
    );
});

describe('DELETE /page/{id}', () => {

    beforeEach(clear);

    afterAll(clear);

    it('options DELETE', () => options('/page/testid', 'DELETE').then(headers));

    it('status, execute and headers', () => create()
        .then(row => remove(id = row._id, true))
        .then(res => {

            headers(res);

            expect(res.status).toEqual(204);

            return find(id);
        })
        .then(row => expect(row).toBeUndefined())
    );
});

describe('PUT /page/{id}', () => {

    beforeEach(clear);

    afterAll(clear);

    it('options PUT', () => options('/page/testid', 'PUT').then(headers));

    it('status, execute and headers', () => create()
        .then(row => edit(id = row._id, {
            ...data,
            laststatus  : 100,
        }, true))
        .then(res => {

            headers(res);

            expect(res.status).toBe(204);
        })
        .then(() => find(id))
        .then(row => expect(row.laststatus).toEqual(100))
    );
});

describe('POST /page', () => {

    beforeEach(clear);

    afterAll(clear);

    it('options POST', () => options('/page', 'POST').then(headers));

    it('status, execute and headers', () => create(undefined, true)
        .then(res => {

            expect(res.status).toBe(201);

            headers(res);

            return res.json();
        })
        .then(json => json.data)
        .then(row => find(row._id))
        .then(row => expect(row.laststatus).toEqual(data.laststatus))
    );
});


