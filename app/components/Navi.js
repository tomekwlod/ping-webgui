
import React from 'react';

import {
    Button,
    Container,
    Header,
    List,
    Label,
    Menu,
    Icon
} from 'semantic-ui-react';

import { NavLink } from 'react-router-dom';

const Navi = ({
    on,
    loaderOn,
    loaderOff,
    loaderError,
    loaderMessage,
    buttonsVisible
}) => (
    buttonsVisible ?
    <div className="navi">
        {buttonsVisible &&
        <Button.Group size="mini">
            <Button
                size='mini'
                onClick={loaderOn}
                disabled={on === 'on'}
            >on</Button>
            <Button
                size='mini'
                color="red"
                onClick={() => loaderError("Server error example ...")}
                disabled={on === 'on'}
            >err</Button>
            <Button
                size='mini'
                color="green"
                onClick={() => loaderMessage("Example message ...")}
                disabled={on === 'on'}
            >msg</Button>
            <Button
                size='mini'
                onClick={loaderOff}
                disabled={on === 'off'}
            >off</Button>
        </Button.Group>
        }
    </div>
    : null
);

export default Navi;