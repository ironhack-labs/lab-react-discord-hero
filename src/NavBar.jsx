import discordLogo from './assets/discord-logo-white.png'
import rayas from './assets/menu-icon.png'

function NavBar() {
    return (
        <>
        <nav id="Navbar">
            <img className='logo' src={discordLogo} alt="" />
            <img className='logorayas'src={rayas} alt="" /> 
        </nav>
        </>
    )
}
export default NavBar