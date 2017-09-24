
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

const mapStateToProps = state => ({
    on      : getLoaderStatus(state),
    list    : getList(state),
    del     : getDelElement(state)
});

export default connect(
    mapStateToProps,
    actions
)(MainListVisible);