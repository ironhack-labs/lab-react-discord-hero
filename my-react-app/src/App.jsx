// src/App.jsx


function App() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <img src='./src/assets/discord-logo-white.png'
          alt='Discord Logo'
          style={styles.logoIcon}/>
        </div>
        <img src="./src/assets/menu-icon.png"
        alt="Menu"
        style={styles.menuIconStyle}/>
      </div>

      <div style={styles.content}>
        <h1 style={styles.title}>IMAGINE A PLACE....</h1>
        <p style={styles.description}>
          ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
        </p>

<div style={styles.buttonContainer}>
  <button style={styles.whiteButton}>Download for Mac</button>
  <button style={styles.darkButton}>Open Discord in your browser</button>
</div>

      </div>
    </div>
  );
}

const styles = {
  container:{
    backgroundColor: "#404eed",
    backgroundImage: "url('./src/assets/discord-background.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
    backgroundSize: "min(46vw, 520px) auto",
    color:"#ffffff",
    minHeight:"100vh",
    height:"100vh",
    width:"100%",
    padding:"20px",
    boxSizing:"border-box",
    position:"relative",
    overflow:"hidden",
    display:"flex",
    flexDirection:"column"

  },
  header: {
    fontFamily:"Poppins , sans-serif",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%",
    maxWidth:"1200px",
    margin:"0 auto",
    minHeight:"54px",
    flexShrink:0

  },
  logoContainer: {
    display:"flex",
    alignItems:"center",
    gap:"5px",
  },
  logoIcon:{
    width:"50px",
    height:"50px",
    objectFit:"contain",
    filter:"brightness(0) invert(1)"
  },
  menuIconStyle: {
    width:"24px",
    height:"24px",
    objectFit:"contain",
    cursor:"pointer",


  },


  content: {
    fontFamily:"Roboto, sans-serif",
    width:"100%",
    maxWidth:"620px",
    margin:"0",
    padding:"0 24px",
    textAlign:"left",
    position:"relative",
    zIndex:2,
    boxSizing:"border-box",
    flexGrow:1,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"flex-start"
  },
  title:{
    fontSize:"40px",
    fontWeight:"900",
    marginBottom:"20px",
    textTransform:"uppercase",
    lineHeight:1.05,
    textAlign:"left",
    alignSelf:"flex-start"
  },
  description: {
    fontSize:"16px",
    lineHeight:1.6,
    marginBottom:"40px",
    width:"100%",
    maxWidth:"560px",
    marginLeft:"0",
    marginRight:"0",
    textAlign:"left"
  },
  buttonContainer: {
    display:"flex",
    flexDirection:"column",
    gap:"15px",
    alignItems:"flex-start",
    width:"100%",
    maxWidth:"300px",
    margin:"0"
  },

  whiteButton: {
    backgroundColor:"#ffff",
    color: "#23272a",
    padding:"16px 32px",
    border:"none",
    borderRadius:"40px",
    fontSize:"16px",
    fontWeight:"bold",
    cursor:"pointer",
    width:"100%",
    maxWidth:"230px"
  },

  darkButton: {
    backgroundColor:"#23272a",
    color: "#ffff",
    padding:"16px 32px",
    border:"none",
    borderRadius:"40px",
    fontSize:"16px",
    fontWeight:"bold",
    cursor:"pointer",
    width:"100%",
    maxWidth:"300px"
  },
  heroImage: {
    display:"none"
  }

}

export default App;