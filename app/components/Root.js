
import React from 'react';

import GlobalLoaderVisible from './GlobalLoaderVisible';

import ContainerVisible from './ContainerVisible';

import LoginFormVisible from './LoginFormVisible';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import configPublic from '../public.config';

import {
    Button,
    Checkbox,
    Form,
    Header,
    Input,
    Message,
    Icon
} from 'semantic-ui-react'

const Root = () => (
    <div>
        <GlobalLoaderVisible/>
        <LoginFormVisible>
            <Switch>
                {/*<Route path="/login" component={LoginForm} />*/}
                <Route component={ContainerVisible} />
            </Switch>
        </LoginFormVisible>
    </div>
);

export default Root;