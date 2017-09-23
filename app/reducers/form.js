
import { combineReducers } from 'redux';

import {
    FORM_ITEM_INTERVAL_CHANGE,
    FORM_ITEM_STATUS_CHANGE,
    FORM_ITEM_URL_CHANGE,
    FORM_ITEM_FETCH_SUCCESS
} from '../actions';

const laststatus = (state = 0, action) => {
    switch (action.type) {
        case FORM_ITEM_STATUS_CHANGE:
            return parseInt(action.value, 10) || 0;
        case FORM_ITEM_FETCH_SUCCESS:
            return action.data.laststatus;
        default:
            return state;
    }
};

const interval = (state = 1, action) => {
    switch (action.type) {
        case FORM_ITEM_INTERVAL_CHANGE:
            return parseInt(action.value, 10) || 1;
        case FORM_ITEM_FETCH_SUCCESS:
            return action.data.interval;
        default:
            return state;
    }
};

const url = (state = 'http://', action) => {
    switch (action.type) {
        case FORM_ITEM_URL_CHANGE:
            return action.value;
        case FORM_ITEM_FETCH_SUCCESS:
            return action.data.url;
        default:
            return state;
    }
}

export default combineReducers({
    laststatus,
    interval,
    url
});

export const getStatus      = state => state.status;
export const getInterval    = state => state.interval;
export const getUrl         = state => state.url;

export const getValue = (state, key) => state[key];