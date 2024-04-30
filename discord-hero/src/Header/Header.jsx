import '../Header/Header.css'

const Header = () => {
    return (
        <header className='Header'>

            <img className='DiscordLogo' src={discordLogo} alt="Logo" />
            <img className='MenuLogo' src={menuIcon} alt="Navicon" />

        </header>
    )
}

export default Header