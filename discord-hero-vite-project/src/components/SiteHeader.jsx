import logo from '../assets/discord-logo-white.png';
import menuIcon from '../assets/menu-icon.png';
import './SiteHeader.css';

export function SiteHeader(){
    return (
        <header>
            <div className="SiteHeader">
                <img id = "logo" src={logo} alt="Discord Logo" />
                <button id = "MenuButton">
                    <img src={menuIcon} alt="Menu" />
                </button>
            </div>
        </header>
        
    )
}

