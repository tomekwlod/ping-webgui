
import React, { Component } from 'react';
import GlobalLoader from './GlobalLoader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';

import { getLoader } from '../reducers';

class GlobalLoaderVisible extends Component {
    static PropTypes = {
        on: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool
        ]).isRequired
    }
    render() {

        const { on } = this.props;

        return <GlobalLoader on={on} />
    }
}

const mapStateToProps = (state) => {
    return {
        on: getLoader(state)
    };
};

export default connect(
    mapStateToProps,
    actions
)(GlobalLoaderVisible);