
import React, { Component } from 'react';

import MainList from './MainList';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { autobind } from 'core-decorators';

import * as actions from '../actions';

import { getLoader, getList } from '../reducers';

class MainListVisible extends Component {
    static PropTypes = {
        on: PropTypes.bool.isRequired,
        list: PropTypes.array.isRequired
    }
    componentDidMount() {
        this.getData();
    }
    componentDidUpdate(prevProps) {
        // this.getData();
    }
    @autobind
    getData() {

        const { fetchList } = this.props;

        fetchList();
    }
    render() {
        return (
            <MainList {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        on      : getLoader(state),
        list    : getList(state)
    };
};

export default connect(
    mapStateToProps,
    actions
)(MainListVisible);