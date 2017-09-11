'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Index from 'pages/Index';

import 'normalize-css';

import 'semantic-ui-css/semantic.min.css';

const list = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO':
            return state.map(item => todo(item, action))
        default:
            return state;
    }
};
const visibilityFilter = (
    state = 'SHOW_ALL',
    action
) => {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state;
    }
};

const mainReducer = combineReducers({
    list,
    visibilityFilter
});

ReactDOM.render(
    <Provider store={createStore(mainReducer)}>
        <Index />
    </Provider>,
    document.getElementById('app')
);

if (/app_dev\.php/.test(location.href)) {
    document.body.classList.add('dev');
}
