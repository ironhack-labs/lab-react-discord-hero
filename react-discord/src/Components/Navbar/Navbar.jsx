import './Navbar.css'
import discordLogo from './../../assets/discord-logo-white.png'
import hamburguer from './../../assets/hamburguer.png'

const Navbar = () => {

    return (
        <nav className='navBar'>
            <img className='discord-logo' src={discordLogo} alt="Discord Logo" />
            <img className='hamburguer' src={hamburguer} alt="Hamburguer menu" />
        </nav>
    )

}

export default Navbar