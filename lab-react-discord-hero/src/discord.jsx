import discord from "./assets/discord-background.png"

const style = {
    display: "flex",  
    itemAlign: "right",
    marginLeft: "400px"

   

}


function Discord() {

    return (
        <div style={style}>
            <img src={discord} alt="discord-background" />
        </div>
    )
}

export default Discord