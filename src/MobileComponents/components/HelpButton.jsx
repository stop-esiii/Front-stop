import React from 'react';

const HelpButton = ({ onClick }) => {
    return (
        <button className="help-button" onClick={onClick}>
            AJUDA
        </button>
    );
};

export default HelpButton;
