import logo from "./assets/discord-logo-white.png"
import menu from "./assets/menu-icon.png"
import React from "react"

export default function Header() {
    return (
            <nav id="nav-container">
                <img src={logo} alt="Discord logo" id="nav-logo-image" />
                <button className="nav-menu-button">
                    <img src={menu} alt="Menu button" id="nav-menu-image" />
                </button>
            </nav >
    )
}