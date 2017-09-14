'use strict';

import React from 'react';
import ReactDOM, { render } from 'react-dom';

import 'normalize-css';

import './pages/index.scss';

import 'semantic-ui-css/semantic.min.css';

import Root from './components/Root';

import configureStore from './configureStore';

const store = configureStore();

render(
    <Root store={store} />,
    document.getElementById('app')
);

if (/app_dev\.php/.test(location.href)) {
    document.body.classList.add('dev');
}
