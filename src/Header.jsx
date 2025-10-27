import logo from './assets/discord-logo-white.png'
import menu from './assets/menu-icon.png'

function Header() {
    return (
        <div style={{display: 'flex', height: '35px', justifyContent: 'space-between'}}>
            <img src={logo} alt="my logo" />
            <img src={menu} alt="menu" />
        </div>
    )
}

export default Header
