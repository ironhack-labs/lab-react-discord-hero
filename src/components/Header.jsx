import discordLogo from "../assets/discord-logo-white.png";
import menuIcon from "../assets/menu-icon.png";
import background from "../assets/discord-background.png";

function Header() {

const containerStyle = {
    position: "relative",
    backgroundColor: "#5865F2",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
    padding: "20px 40px",
    boxSizing: "border-box"
};

const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
};

const logoWrapStyle = {
    display: "flex",
    alignItems: "center"
}

const h1Style = {
    fontFamily: "Poppins, sans-serif",
    color: "white",
    fontSize: 50,
    margin: 0,
    padding: 0,
    paddingRight: 600,
    paddingTop: 200,
    marginBottom: 25
}

const pStyle = {
    fontFamily: "Roboto, sans-serif",
    color: "white",
    fontSize: 18,
    paddingRight: 450,
    marginTop: 0
}

const buttonRowStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    marginTop: 24
}

const firstButtonStyle = {
backgroundColor: "white",
height: 50,
width: 200,
borderRadius: 50,
fontFamily: "Roboto, sans-serif",
fontWeight: 450,
marginLeft: 10,
fontSize: 17,
border: "none"
}

const secondButtonStyle = {
backgroundColor: "#23272A",
color: "white",
height: 50,
width: 300,
borderRadius: 50,
fontFamily: "Roboto, sans-serif",
fontWeight: 450,
marginLeft: 10,
fontSize: 17,
border: "none",
paddingRight: 23,
alignItems: "center"
}

const illustrationStyle = {
    position: "absolute",
    marginLeft: 400
}

return(
<header style={containerStyle}>

<nav style={navStyle}>
<div style={logoWrapStyle}>   
<img src={discordLogo} alt= "discord logo" width={100}/>    
</div>
<img src={menuIcon} alt="menu" width={28} />
</nav>

<h1 style={h1Style}>IMAGINE A PLACE...</h1>
<p style={pStyle}>  ...where you can belong to a school club, a gaming group, or a
  worldwide art community. Where just you and a handful of friends
  can spend time together. A place that makes it easy to talk every
  day and hang out more often.</p>
<div style={buttonRowStyle}>
<button style={firstButtonStyle}>Download for Mac</button>
<button style={secondButtonStyle}>Open Discord in your browser</button>
</div>

<img src={background} alt="background picture" style={illustrationStyle} />

</header>
);
}

export default Header