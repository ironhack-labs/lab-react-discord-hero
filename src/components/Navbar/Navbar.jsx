import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='nav'>
        <div className='icon'>
            <img src="/src/assets/images/discord-logo-white.png" alt="dicord-icon"/>
        </div>
        <div className='main-menu'><img src="/src/assets/images/menu-icon.png" alt="menu"/></div>
    </nav>
  )
}

export default Navbar