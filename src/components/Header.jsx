import React from "react";
import logo from '../assets/discord-logo-white.png';
import icon from '../assets/menu-icon.png';

function Header(){
    return (
        <header className="header">
            <img src = {logo} alt ="Discord logo" className="header-logo"/>
            <img src = {icon} alt ="Menu icon" className="menu-icon"/>
        </header>
    );
}
export default Header;