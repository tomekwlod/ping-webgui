
import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { autobind } from 'core-decorators';

import * as actions from '../actions';

import NaviVisible from './NaviVisible';

import classnames from 'classnames';

import {
    getLoaderStatus,
    getInterval,
    getStatusColor,
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

import './ContainerVisible.scss';

class ContainerVisible extends Component {
    render () {
        const {
            loginSignOut,
            history,
            interval,
            refreshIntervalSet,
            status,
            on,
        } = this.props;

        const link = document.querySelector("link[rel*='icon']");

        link.href = '/favicon.ico';

        if (on === 'on') {

            link.href = '/favicon_green.ico';
        }
        else if (status) {

            link.href = '/favicon_red.ico';
        }

        return (
            <div className="main-container">
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
                        <Menu.Item position='right' className={classnames('indicator', {
                            'red' : status
                        })}>
                            <div></div>
                        </Menu.Item>
                        <Menu.Item position='right' onClick={loginSignOut} className="sign-out">
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
    }
}

const mapStateToProps = (state) => ({
    on          : getLoaderStatus(state),
    interval    : getInterval(state),
    status      : getStatusColor(state)
});

export default withRouter(connect(
    mapStateToProps,
    actions
)(ContainerVisible));