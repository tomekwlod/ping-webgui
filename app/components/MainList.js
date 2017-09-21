
import React from 'react';

import PropTypes from 'prop-types';

import range from 'lodash/range';

import Fp from './FacebookPlaceholder';

import {
    Button,
    Container,
    Header,
    List,
    Icon,
    Label,
    Modal,
    Popup
} from 'semantic-ui-react';

const MainList = ({ on, list, del, showDelete, cancelDelete, deleteElementFromList }) => {

    if (on && ! list.length) {

        return <List divided relaxed>
            {
                range(1, 6).map(
                    i => <List.Item key={i}>
                        <Fp>
                            <Fp.box className="icon" />
                            <Fp.p numberOfWords={20} wordLength={5}/>
                            <Fp.p numberOfWords={5} />
                        </Fp>
                    </List.Item>
                )
            }
        </List>
    }

    return (
        <div>
            <div className="table">
                {
                    list.map((item) => (
                        <div className="cell" key={item._id}>
                            <div className="ico">
                                <Icon name='feed' />
                            </div>
                            <div>
                                <div className="tico">
                                    <Label
                                        className="right"
                                        size="mini"
                                        color={(item.laststatus == 200) ? 'teal' : 'red' }
                                    >{item.laststatus}</Label>
                                </div>
                                <div className="ttop">
                                    Modified: {item._modified}, Created: {item._created}
                                </div>
                                <div className="tbottom">
                                    <a href={item.url} target="_blank">{item.url}</a>
                                </div>
                            </div>
                            <div className="actions">
                                <Button.Group size="mini">
                                    <Popup
                                        trigger={
                                            <Button
                                                color="red"
                                                icon='trash outline'
                                                size="mini"
                                                onClick={() => showDelete(item._id)}
                                                disabled={on}
                                            />
                                        }
                                        content='Delete'
                                        inverted
                                        size="mini"
                                        position="top center"
                                    />
                                    <Button icon='align center' size="mini" disabled={on} />
                                    <Button icon='align right' size="mini" disabled={on} />
                                    <Button icon='align justify' size="mini" disabled={on} />
                                </Button.Group>
                            </div>
                        </div>
                    ))
                }
            </div>

            <Modal
                basic
                size='small'
                dimmer="blurring"
                open={!!del}
                onClose={cancelDelete}
            >
                <Header icon='trash outline' content='Delete endpoint' />
                <Modal.Content>
                    <p>Do you really want to delete checking endpoint</p>
                    <pre>{del ? del.url : ''}</pre>
                    <p>?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        color="red"
                        onClick={() => deleteElementFromList(del._id)}
                    >
                        <Icon name='trash outline' /> Yes
                    </Button>
                    <Button
                        basic
                        color='green'
                        inverted
                        onClick={cancelDelete}
                    >
                        <Icon name='remove' /> No
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    );
};
MainList.propTypes = {
    on: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
    del: PropTypes.any,
    showDelete: PropTypes.func,
    onCancelDelete: PropTypes.func,
    deleteElementFromList: PropTypes.func
};

export default MainList;