import React from 'react';

import logo from '../assets/discord-logo.png';
import menu from '../assets/menu-icon.png';


function TopNav() {

    return (
        <>
            <nav className="TopNav">
                <ul>
                    <li><img src={logo} alt="logo" /></li>
                    <li><img src={menu} alt="menu" /></li>
                </ul>
            </nav>
        </>
    )
}

export default TopNav;