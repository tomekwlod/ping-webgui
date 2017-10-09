
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import * as actions from '../actions';

import { getLoaderStatus, getFormData } from '../reducers';

import { autobind } from 'core-decorators';

import { Redirect } from 'react-router-dom';

import {
    Container,
    Header,
    List,
    Icon,
    Label,
    Modal,
    Popup,
    Button,
    Checkbox,
    Form
} from 'semantic-ui-react';

class FormComponent extends Component {
    static PropTypes = {
        status: PropTypes.oneOf([
            'on', 'off', 'err', 'msg'
        ]).isRequired,
        msg: PropTypes.string.isRequired
    }
    constructor(...args) {

        super(...args);

        this.state = {
            submitting: false,
            redirect: false,
            lasturl: null
        }
    }
    componentDidUpdate() {
        this.checkReset();
    }
    @autobind
    checkReset() {

        const last = this.state.lasturl;

        const { pathname } = this.props.location;

        if (last !== pathname) {

            if ( pathname === '/gui/create') {

                const { formReset } = this.props;

                formReset();
            }

            this.setState({
                lasturl: pathname
            })
        }
    }
    componentDidMount() {

        const { id } = this.props.match.params;

        const { formItemFetchRequest } = this.props;

        if (id) {

            formItemFetchRequest(id);
        }

        this.checkReset();
    }
    @autobind
    send() {

        const { id } = this.props.match.params;

        const {
            formSubmit
        } = this.props;

        this.setState({
            submitting: true
        });

        formSubmit(id).then(status => {
            this.setState({
                submitting: false,
                redirect: (status === 'error') ? false : status
            });
        });
    }
    render() {

        const { id } = this.props.match.params;

        if (this.state.redirect) {

            const { pathname } = this.props.location;

            const newurl = `/gui/edit/${this.state.redirect}`;

            if (newurl !== pathname) {

                const redirect = <Redirect to={newurl} />

                // yes i know, dont' modify state in render
                // but it is protected conditionally
                setTimeout(() => this.setState({
                    redirect: false
                }), 0);

                return redirect;
            }
        }

        const {
            status,
            formChangeInterval,
            formChangeStatus,
            formChangeUrl
        } = this.props;

        let content;

        if (id && status === 'on' && !this.state.submitting) {

            content = <div>
                populating data ...
            </div>
        }
        else {
            content = <Form
                onSubmit={this.send}
            >
                <Form.Field>
                    <label>Url:</label>
                    <input
                        placeholder='http://'
                        value={this.props.url}
                        onChange={e => formChangeUrl(e.target.value)}
                        disabled={status === 'on'}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Interval</label>
                    <input
                        value={this.props.interval}
                        onChange={e => formChangeInterval(e.target.value)}
                        disabled={status === 'on'}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last status</label>
                    <input
                        value={this.props.laststatus}
                        onChange={e => formChangeStatus(e.target.value)}
                        disabled={status === 'on'}
                    />
                </Form.Field>
                <Button
                    type='submit'
                    disabled={status === 'on'}
                >
                    {id ? 'Edit' : 'Create'}
                </Button>
            </Form>
        }

        return (
            <div className="capone">
                <Header as="h1">
                    {id ? "Editing" : "Creating"}
                    {' '}
                    {"endpoint"}
                </Header>
                {content}
            </div>
        );
    }
}

export default connect(
    state => ({
        status : getLoaderStatus(state),
        ...getFormData(state)
    }),
    actions
)(FormComponent);