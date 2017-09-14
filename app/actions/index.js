
import { fetchJson } from 'config';

// ===========================

// loader
export const LOADER_ON  = 'LOADER_ON';
export const LOADER_OFF = 'LOADER_OFF';

export const loaderOn = () => {
    return {
        type: LOADER_ON
    }
}

export const loaderOff = () => {
    return {
        type: LOADER_OFF
    }
}

// list
export const FETCH_LIST_REQUEST = 'FETCH_LIST_REQUEST';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAILURE = 'FETCH_LIST_FAILURE';

import { getLoader } from '../reducers';

export const fetchList = () => (dispatch, getState) => {

    const state = getState();

    if (getLoader(state)) {

        log('is loading now - stop and return promise', state);

        return Promise.resolve('cancel');
    }

    dispatch(loaderOn());

    return fetchJson('/pages').then(
        response => {

            dispatch(loaderOff());

            log('fetch data', response);

            dispatch({
                type: FETCH_LIST_SUCCESS,
                list: response.data
            });

            return 'success';
        },
        error => {

            dispatch(loaderOff());

            dispatch({
                type: FETCH_LIST_FAILURE,
                message: error || 'Something went wrong'
            });

            return 'failure';
        }
    );
}

export default fetchList;