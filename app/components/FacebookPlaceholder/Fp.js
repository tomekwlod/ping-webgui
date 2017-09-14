
import React from 'react';
import PropTypes from 'prop-types';

import './Fp.scss';

const Fp = (props) => {

    const { children, ...rest } = props;

    return (
        <div className="FacebookParagraph" {...rest}>
            {children}
        </div>
    );
};

Fp.p = (props) => {

    const { children, ...rest } = props;

    let newChildren = [];

    if (typeof children === 'string') {

        (children.split(/\s+/gi) || []).map((word, i) => {
            newChildren.push(<span key={`p-${i}`} className="p">{word}</span>);
            newChildren.push(<span key={`s-${i}`} className="s">{' '}</span>);
        });
    }

    return (
        <p {...rest}>{newChildren}</p>
    )
}
Fp.p.propTypes = {
    children: PropTypes.string
}

Fp.box = (props) => {

    const { className, ...rest } = props;

    let cn = className;

    if ( ! cn ) {

        throw "className can't be empty 9275";
    }
    cn += ' fp-box';

    return (
        <div className={cn} {...rest} />
    )
}

Fp.box.propTypes = {
    className: PropTypes.string
}

export default Fp;