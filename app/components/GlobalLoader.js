
import React from 'react';

import './GlobalLoader.scss';

import { Segment, Loader, Dimmer } from 'semantic-ui-react'

const GlobalLoader = ({ on }) => {

    if ( ! on ) {

        return null;
    }

    return (
        <div className="global-loader-component">
            <Loader size='mini' active inline />
            <span>Loading ...</span>
        </div>
    );
}


export default GlobalLoader;

