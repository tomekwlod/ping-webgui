
import { combineReducers } from 'redux';

import {
    // FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    // FETCH_LIST_FAILURE
} from '../actions';

const byId = (state = {}, action) => {

    switch (action.type) {

        case FETCH_LIST_SUCCESS:

            const nextState = { ...state };

            action.list.forEach(task => {
                nextState[task._id] = task;
            });

            return nextState;
        default:
            return state;
    }
};

const ids = (state = [], action) => {
    switch (action.type) {
        case FETCH_LIST_SUCCESS:
            return action.list.map(task => task._id);
        default:
            return state;
    }
}

export default combineReducers({
    byId,
    ids
});

export const getIds = state => state.ids;

export const getById = (state, id) => state.byId[id];