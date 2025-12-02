import './navbar.css';
import discordLogo from '../../assets/images/bgs/discord-logo-white.png';

function Navbar() {
    return (
        <nav className="navbar-custom">
            <div className="container">
                {/*</div><div className="d-flex justify-content-between align-items-center py-3">*/}
                <div className="navbar-content">
                
                    <img src={discordLogo} alt="Discord" className="navbar-logo"/>

                    {/*botao menu(hamburguer)*/}
                    <button className="menu-button">
                        <div className="menu-line"></div>
                        <div className="menu-line"></div>
                        <div className="menu-line"></div>
                    </button>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;