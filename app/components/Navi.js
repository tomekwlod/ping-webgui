
import React, { Component } from 'react';

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

const Navi = ({ on, loaderOn, loaderOff, loaderError }) => (
    <div className="navi">
        <Menu pointing secondary vertical size="small">
            <NavLink to="/gui" activeClassName="active" exact>
                <Menu.Item>
                    Home
                </Menu.Item>
            </NavLink>
            <NavLink to="/gui/create" activeClassName="active">
                <Menu.Item>
                    Create
                </Menu.Item>
            </NavLink>
        </Menu>
        <Button
            size='mini'
            onClick={loaderOn}
            disabled={!!on}
        >on</Button>
        <Button
            size='mini'
            onClick={() => loaderError("Server error example ...")}
            disabled={!!on}
        >err</Button>
        <Button
            size='mini'
            onClick={loaderOff}
            disabled={!on}
        >off</Button>
    </div>
);

export default Navi;