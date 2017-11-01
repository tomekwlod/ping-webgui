
import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { autobind } from 'core-decorators';

import * as actions from '../actions';

import NaviVisible from './NaviVisible';

import {
    getLoaderStatus,
    getInterval
} from '../reducers';

import routes from '../routes';

import {
    Button,
    Container,
    Header,
    List,
    Label,
    Menu,
    Icon
} from 'semantic-ui-react';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import RedirectUnauthorisedVisible from './RedirectUnauthorisedVisible';

const ContainerVisible = ({ loginSignOut, history, interval, refreshIntervalSet }) => (
    <div className="main-container">

        <RedirectUnauthorisedVisible />

        <div>
            <Menu inverted>
                <Menu.Item onClick={() => history.push('/gui')}>
                    <img
                        src="/ping.ico"
                        alt="logo"
                    />
                    <span className="mobile">Ping service</span>
                </Menu.Item>
                <Menu.Item onClick={() => history.push('/gui/create')}>
                    <Icon name="plus"/>
                    <span className="mobile">Create</span>
                </Menu.Item>
                <Menu.Item>
                    <input type="range" min="2000" max="60000" step="100" value={interval} onChange={e => refreshIntervalSet(parseInt(e.target.value, 10))}/> {interval / 1000} sec
                </Menu.Item>
                <Menu.Item position='right' onClick={loginSignOut}>
                    <Icon name="power"/>
                    <span className="mobile">Sign out</span>
                </Menu.Item>
            </Menu>

        </div>

        <NaviVisible/>
        <div className="content">
            <Switch>
                {routes.map((route, i) => <Route key={i} {...route} />)}
                <Route render={() => (
                    <Redirect to="/gui"/>
                )}/>
            </Switch>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    on      : getLoaderStatus(state),
    interval: getInterval(state)
});

export default withRouter(connect(
    mapStateToProps,
    actions
)(ContainerVisible));