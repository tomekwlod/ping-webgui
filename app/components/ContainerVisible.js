
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { autobind } from 'core-decorators';

import * as actions from '../actions';

import MainListVisible from './MainListVisible';

import NaviVisible from './NaviVisible';

import Form from "./FormComponent";

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

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

const ContainerVisible = () => (
    <div className="container">
        <NaviVisible />
        <div className="content">
            <Switch>
                <Route exact path="/gui" component={MainListVisible} />
                <Route exact path="/gui/create" component={Form} />
                <Route exact path="/gui/edit/:id" component={Form} />
                <Route render={() => (
                    <Redirect to="/gui" />
                )} />
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