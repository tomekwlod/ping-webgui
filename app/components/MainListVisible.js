
import React, { Component } from 'react';

import MainList from './MainList';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import * as actions from '../actions';

import {
    getLoaderStatus,
    getList,
    getDelElement,
    getInterval
} from '../reducers';

class MainListVisible extends Component {
    static propTypes = {
        on: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool
        ]).isRequired,
        list: PropTypes.array.isRequired,
        del: PropTypes.any
    }
    static fetchData = (store, routerParams) => {

        // log('MainListVisible::fetchData()');

        return store.dispatch(actions.fetchList());
    }
    componentDidMount() {

        this.getData();

        this.mount();
    }
    componentDidUpdate() {
        this.mount();
    }
    componentWillUnmount() {
        this.unmount();
    }
    unmount() {

        if (this.handler) {

            clearInterval(this.handler)
        }
    }
    mount() {

        this.unmount();

        this.handler = setInterval(this.getData, this.props.interval);
    }
    getData = () => {

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
    del     : getDelElement(state),
    interval: getInterval(state)
});

export default connect(
    mapStateToProps,
    actions
)(MainListVisible);