
import React from 'react';

import Navi from './Navi';

import { connect } from 'react-redux';

import * as actions from '../actions';

import { getLoader, getList } from '../reducers';

import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        on      : getLoader(state),
        list    : getList(state)
    };
};

export default withRouter(connect(
    mapStateToProps,
    actions
)(Navi));