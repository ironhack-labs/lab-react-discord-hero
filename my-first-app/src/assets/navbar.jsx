import React from "react";
import  './navbar.css'

import DiscordLogoImg from "./discord-logo";
import DiscordMenu from "./discord-menu";



function Navbar () {
    return (
    <div className="navbar">
        <DiscordLogoImg className="logo"/>
        <DiscordMenu className="menu-icon"/>
    </div>
    )
}

export default Navbar;