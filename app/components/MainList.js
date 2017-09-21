
import React from 'react';

import PropTypes from 'prop-types';

import range from 'lodash/range';

import Fp from './FacebookPlaceholder';

import {
    Button,
    Container,
    Header,
    List,
    Label
} from 'semantic-ui-react';

const MainList = ({ on, list }) => (
    <List divided relaxed>
        {
            on ?
                range(1, 6).map(
                    i => <List.Item key={i}>
                        <Fp>
                            <Fp.box className="icon" />
                            <Fp.p numberOfWords={20} wordLength={5}/>
                            <Fp.p numberOfWords={5} />
                        </Fp>
                    </List.Item>
                )
                :
                list.map((item) => {
                    return <List.Item key={item._id}>
                        <List.Icon name="feed" verticalAlign='middle' />
                        <List.Content>
                            <List.Header>
                                <Label
                                    className="right"
                                    size="mini"
                                    color={(item.laststatus == 200) ? 'teal' : 'red' }
                                >{item.laststatus}</Label>
                                Modified: {item._modified}, Created: {item._created}
                            </List.Header>
                            <List.Description>
                                <a href={item.url} target="_blank">{item.url}</a>
                            </List.Description>
                        </List.Content>
                    </List.Item>
                })
        }
    </List>
);
MainList.propTypes = {
    on: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired
};

export default MainList;