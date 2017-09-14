
import * as config from './app.config';

export const getUrl = (path = '') => `http://${config.default}${path}`;

export const fetchJson = (path = '') =>
    fetch(getUrl(path), {
        headers: {
            Accept: 'application/json',
        }
    }).then(res => res.json())
;

