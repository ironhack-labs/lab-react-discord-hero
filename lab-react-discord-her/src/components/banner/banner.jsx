import "./banner.css"

function Banner () {

    const imgDiscord = "src/assets/images/discord-logo-white.png"
    const imgMenu = "src/assets/images/menu-icon.png"

    return (
        <div className ="banner">
            <div className="discordImg">
                <img src={imgDiscord}/>
            </div>
            <div className="menuImg">
                <button><img src={imgMenu}/></button>
            </div>
        </div>
    ) 
}

export default Banner