
import React, { Component } from 'react';

import MainList from './MainList';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { autobind } from 'core-decorators';

import * as actions from '../actions';

import { getLoaderStatus, getList, getDelElement } from '../reducers';

class MainListVisible extends Component {
    static PropTypes = {
        on: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool
        ]).isRequired,
        list: PropTypes.array.isRequired,
        del: PropTypes.any
    }
    static fetchData(store) {

        log('MainListVisible::fetchData()');

        return store.dispatch(actions.fetchList());
    }
    componentDidMount() {

        log('componentDidMount');

        const { list } = this.props;

        (list && list.length) || this.getData();
    }
    componentDidUpdate(prevProps) {
        // this.getData();
    }
    @autobind
    getData() {

        const { fetchList } = this.props;

        return fetchList();
    }
    render() {
        return (
            <MainList {...this.props} />
        );
    }
}

const mapStateToProps = state => ({
    on      : getLoaderStatus(state),
    list    : getList(state),
    del     : getDelElement(state)
});

export default connect(
    mapStateToProps,
    actions
)(MainListVisible);