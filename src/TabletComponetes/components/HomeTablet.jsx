import React from 'react';
import Clock from "./Clock";
import LoginButton from "./LoginButton";
import HelpButton from "./HelpButton";
import SettingsButton from "./SettingsButton";
import '../components/stylesComponents/HomeTablet.css'
import Modal from "./Modal";

function HomeTablet () {

    return (
        <div className="tablet-app-container">
            <div className="tablet-main-container">
                <div className="tablet-logo-container">
                    <Clock/>
                </div>
                <div className="tablet-menu-container">
                    <LoginButton />
                    <HelpButton/>
                    <Modal/>
                    <SettingsButton/>
                </div>
            </div>
        </div>
    );
};

export default HomeTablet;