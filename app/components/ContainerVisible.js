
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Fp from './FacebookPlaceholder/Fp';

import { autobind } from 'core-decorators';

import range from 'lodash/range';

import * as actions from '../actions';

import { getLoader, getList } from '../reducers';

import * as config from 'config';

import {
    Button,
    Container,
    Header,
    List,
    Label
} from 'semantic-ui-react';

class ContainerVisible extends Component {
    static PropTypes = {
        on: PropTypes.bool.isRequired
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

        const { loaderOn, loaderOff, on, list } = this.props;

        return (
            <div className="container">
                <div className="navi">
                    <Button
                        size='mini'
                        onClick={loaderOn}
                        disabled={on}
                    >on</Button>
                    <Button
                        size='mini'
                        onClick={loaderOff}
                        disabled={!on}
                    >off</Button>
                </div>
                <div className="content">
                    <List divided relaxed>
                        {
                            on ?
                                range(1, 6).map(
                                    i => <List.Item key={i}>
                                        <Fp>
                                            <Fp.box className="test"></Fp.box>
                                            <Fp.p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec magna est. Fusce mollis, erat nec facilisis consequat, quam nibh iaculis metus, ut interdum elit eros eget ipsum. Aenean mattis risus non ligula ornare, id pharetra turpis dignissim.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec magna est. Fusce mollis, erat nec facilisis consequat, quam nibh iaculis metus, ut interdum elit eros eget ipsum. Aenean mattis risus non ligula ornare, id pharetra turpis dignissim.</Fp.p>
                                        </Fp>
                                    </List.Item>
                                )
                                    :
                                list.map((item) => {
                                    return <List.Item key={item._id}>
                                        <List.Icon name="feed" verticalAlign='middle' />
                                        <List.Content>
                                            <List.Header>Modified: {item._modified}, Created: {item._created}</List.Header>
                                            <List.Description><a href={item.url} target="_blank">{item.url}</a></List.Description>
                                            <Label size="mini" color={(item.laststatus == 200) ? 'teal' : 'red' }>{item.laststatus}</Label>
                                        </List.Content>
                                    </List.Item>
                                })
                        }
                    </List>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        on: getLoader(state),
        list: getList(state)
    };
};

export default connect(
    mapStateToProps,
    actions
)(ContainerVisible);