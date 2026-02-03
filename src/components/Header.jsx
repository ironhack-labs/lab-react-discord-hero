import React from 'react'
import discordLogo from "../assets/discord-logo-white.png";
import menuIcon from "../assets/menu-icon.png";
const Header = () => {
  return (
    <> 
       <div className='header'>
         <img src={discordLogo} alt="Discord" style={{width:"100px", height:"40px"}}/>
         <img src={menuIcon} alt="Menu" />
       </div>
    </>
  )
}

export default Header
console.log("test")



