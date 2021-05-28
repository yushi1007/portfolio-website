import React from 'react';

const ModeButton = ({ toggle, handleClick }) => {
    return (
        <div onClick={handleClick} className={`toggle ${toggle ? "night" : ""}`}>
            <div className="notch">
                <div className="crater"></div>
                <div className="crater"></div>
            </div>
            <div className="cloud">
                <div className="shape md"></div>
                <div className="shape sm"></div>
                <div className="shape sm2"></div>
                <div className="shape lg"></div>
            </div>
        </div>
    )
}

export default ModeButton;