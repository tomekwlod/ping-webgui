
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalLoaderVisible from './GlobalLoaderVisible';
import ContainerVisible from './ContainerVisible';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <GlobalLoaderVisible />
                <ContainerVisible />
            </div>
        </Router>
    </Provider>
);

export default Root;