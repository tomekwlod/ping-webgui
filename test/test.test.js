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

    it('status and execute', () => Promise.all(
            [...urls].map(url => create({
                ...data,
                url
            }))
        )
        .then(created =>
            created.map(entity =>
                urls.filter(url =>
                    entity.url === url
                ).length > 0
            )
        )
        .then(data => data.filter(v => v === true).length)
        .then(length => expect(length).toBe(3))
    );
});

describe('GET /page', () => {

    beforeEach(clear);

    afterAll(clear);

    it('options GET', () => options('/page', 'GET').then(headers));

    it('status', () => create(undefined, true)
        .then(res => expect(res.status).toEqual(201)));

    it('execute', () => create()
        .then(row => {

            expect(row._id).toMatch(/^[a-z0-9]{10,}$/i);

            return find(id = row._id);
        })
        .then(row => {
            expect(row._id).toEqual(id);
        })
    );
});

describe('GET /page/{id}', () => {

    beforeEach(clear);

    afterAll(clear);

    it('options GET', () => options('/page/testid', 'GET').then(headers));

    it('status and execute', () => create()
        .then(row => find(row._id, true))
        .then(res => res.status)
        .then(status => expect(status).toEqual(200))
    );
});

describe('DELETE /page/{id}', () => {

    beforeEach(clear);

    afterAll(clear);

    it('options DELETE', () => options('/page/testid', 'DELETE').then(headers));

    it('status and execute', () => create()
        .then(row => remove(id = row._id, true))
        .then(res => {

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

    it('status and execute', () => create()
        .then(row => edit(id = row._id, {
            ...data,
            laststatus  : 100,
        }))
        .then(status => expect(status).toBeTruthy())
        .then(() => find(id))
        .then(row => expect(row.laststatus).toEqual(100))
    );
});

describe('POST /page', () => {

    beforeEach(clear);

    afterAll(clear);

    it('options POST', () => options('/page', 'POST').then(headers));

    it('status and execute', () => create(undefined, true)
        .then(res => {

            expect(res.status).toBeTruthy();

            return res.json();
        })
        .then(json => json.data)
        .then(row => find(row._id))
        .then(row => expect(row.laststatus).toEqual(data.laststatus))
    );
});

