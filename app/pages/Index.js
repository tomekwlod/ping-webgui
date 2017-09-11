'use strict';

import React from 'react';

import { Button, Container, Header } from 'semantic-ui-react'

import './index.scss';

export default class Index extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="navi">
                    menu
                </div>
                <div className="content">
                    <Button
                        content='Discover docs'
                        href=''
                        icon='github'
                        labelPosition='left'
                    />
                </div>
            </div>
        );
    }
}


