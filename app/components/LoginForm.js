
import React, { Component } from 'react';

import configPublic from '../public.config';

import classnames from 'classnames';

import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

const node = Object.prototype.toString.call(global.process) === '[object process]';

import {
    Button,
    Checkbox,
    Form,
    Header,
    Input,
    Message,
    Icon
} from 'semantic-ui-react'

import './LoginForm.scss';
import {getAuthenticated, getLoading, getLoginError} from "../reducers";


export default class LoginForm extends Component {
    static fetchData = (store, routerParams) => {
        return Promise.resolve();
    }
    static propTypes = {
        authenticated: PropTypes.bool.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.string,
        password: PropTypes.string,
        username: PropTypes.string,
        action: PropTypes.string.isRequired,
        redirectAfterAuthenticated: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.string
        ]).isRequired,
        onSignOut: PropTypes.func
    };
    constructor(...args) {
        super(...args);

        this.state = {
            password: '',
            username: '',
        };
    }
    componentWillUnmount() {
        document.body.classList.remove('login-form');
    }
    // onSubmit = e => {
    //
    //     e.preventDefault();
    //
    //     const {
    //         loginRequest
    //     } = this.props;
    //
    //     loginRequest(this.state.username, this.state.password);
    // }
    onChange = (e, name) => this.setState({[name]:e.target.value});
    render = () => {

        const {
            loading,
            error,
            action,
            redirectAfterAuthenticated,
            authenticated,
            loginRequest
        } = this.props;

        let content = null;

        if (authenticated) {

            node || document.body.classList.remove('login-form');

            return this.props.children || (
                <div>
                    <Button size="tiny" onClick={this.props.onSignOut}>
                        <Icon name="log out" /> Sign out
                    </Button>
                </div>
            );
        }
        else {

            if (!node && location.pathname !== action) {

                return (
                    <Redirect to={action} />
                );
            }

            node || document.body.classList.add('login-form');

            content = (
                <div>
                    <Header as="h2">Log-in to your account.</Header>
                    <div>
                        <Form
                            action={action}
                            size="mini"
                            disabled={loading}
                            method="POST"
                        >
                            <Form.Field>
                                <label htmlFor="username">First Name</label>
                                {/* https://stackoverflow.com/a/37601110/5560682 */}
                                <Input
                                    name="username"
                                    placeholder="Username"
                                    autoComplete="username"
                                    autoCorrect="off"
                                    spellCheck="false"
                                    required
                                    loading={loading}
                                    disabled={loading}
                                    icon="user"
                                    iconPosition="left"
                                    onChange={e => this.onChange(e, 'username')}
                                    error={!!error}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="password">Password</label>
                                <Input
                                    ref={input => this.password = input}
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="password"
                                    autoCorrect="off"
                                    spellCheck="false"
                                    required
                                    loading={loading}
                                    disabled={loading}
                                    icon="lock"
                                    iconPosition="left"
                                    onChange={e => this.onChange(e, 'password')}
                                    error={!!error}
                                />
                            </Form.Field>
                            {error &&
                            <Message
                                negative
                                size="tiny"
                                color="red"
                            >
                                <Icon name="warning sign" />
                                {error}
                            </Message>
                            }
                            <Button
                                type="submit"
                                size="mini"
                                primary={!loading}
                                disabled={loading}
                            >Login</Button>
                            <input
                                type="hidden"
                                name={configPublic.jwt.loginHiddenInput.name}
                                value={configPublic.jwt.loginHiddenInput.value}
                            />
                        </Form>
                    </div>
                </div>
            );
        }

        return (
            <section className={classnames('login-form-section', {'shake': !!error})}>
                {content}
            </section>
        );
    };
};