
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { autobind } from 'core-decorators';

import * as actions from '../actions';

import MainListVisible from './MainListVisible';

import NaviVisible from './NaviVisible';

import { getLoader } from '../reducers';

import {
    Button,
    Container,
    Header,
    List,
    Label,
    Menu,
    Icon
} from 'semantic-ui-react';

import { Route, Switch, withRouter } from 'react-router-dom';

const ContainerVisible = () => (
    <div className="container">
        <NaviVisible />
        <div className="content">
            <Switch>
                <Route exact path="/gui" component={MainListVisible} />
                <Route render={() => <div>Not match</div>} />
            </Switch>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        on      : getLoader(state),
    };
};

export default withRouter(connect(
    mapStateToProps,
    actions
)(ContainerVisible));