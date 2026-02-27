import discordLogo from "../assets/discord-logo-white.png"
import menuIcon from "../assets/hamburger-menu.png"

export default function Header(){
    return(
        <>
            <div className="header">
                <img src={discordLogo} alt="" />
                <img src={menuIcon} alt="" />
            </div>
        </>
    )
}