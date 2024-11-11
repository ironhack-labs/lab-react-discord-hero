import discord from '../assets/discord-logo-white.png'
import ham from '../assets/menu-icon.png'
import React from 'react'

const Navbar = () => {
	return (
		<div id='nav-container'>
			<nav id='nav'>
				<img src={discord} alt='' id='nav-logo' />
				<img src={ham} alt='' id='menu-logo' />
			</nav>
		</div>
	)
}

export default Navbar
