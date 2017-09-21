
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import GlobalLoaderVisible from './GlobalLoaderVisible';
import ContainerVisible from './ContainerVisible';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <GlobalLoaderVisible/>
                <ContainerVisible/>
            </div>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;