import background from "../assets/discord-background.png"


function Footer(){


    return(

<>
<footer className="footer">
<img id='main' src={background}></img>


<button>Download for Mac</button>
<button  style={{backgroundColor:'black',color:'white'}}>Open Discord in your browser</button>
</footer>

</>


    )
}

export default Footer