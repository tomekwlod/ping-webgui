
import React from 'react';

import './GlobalLoader.scss';

import { Segment, Loader, Dimmer } from 'semantic-ui-react'

const GlobalLoader = ({ on }) => {

    if ( ! on ) {

        return null;
    }

    if ( typeof on === 'string' ) {

        return (
            <div className="global-loader-component error">
                <span>{on}</span>
            </div>
        );
    }

    return (
        <div className="global-loader-component normal">
            <Loader size='mini' active inline />
            <span>Loading ...</span>
        </div>
    );
}


export default GlobalLoader;

