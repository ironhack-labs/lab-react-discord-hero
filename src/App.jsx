import "./App.css";
//import image from "./discord-background.png";

const container = {
  position: "relative",
  display: "flex",
  // justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#3537aa",
  width: "800px",
  height: "800px",
  padding: "40px",
  margin: "100px auto",
  color: "white",
  fontSize: "20px", 
  fontFamily: "Roboto, sans-serif",
};
const title = {
  fontSize: "50px",
  fontWeight: "900",
  fontFamily: "popkins, sans-serif",
  margin: "-100px 0px 70px 0px",
};
const textBox = {
  maxWidth: "80%",
  lineHeight: "1.6",
  textAlign: "left",
};

const image = {
  width: "600px",
  position: "absolute",
  bottom: "0px",
  right: "1px",
};
const image1 = {
  width: "160px",
  position: "absolute",
  top: "10px",
  left: "10px",
};
const image2 = {
  width: "60px",
  position: "absolute",
  top: "10px",
  right: "10px",
};

function App() {
  return (
    <>
    
      <div style={container}>
        <div style={textBox}>
          <h1 style={title}>IMAGINE A<br />PLACE...</h1>
          <p>
            ...where youn can belong to a school club, a gaming grounp, or a
          </p>
          <p>worldwide art community. Where just you and a handful of</p>
          <p>friends can spend time together. A place that makes it easy to </p>
          <p>a talk everyday and hand out more often. </p>
          <><button>Download for Mac</button><br /><button>Open Discord in your browser</button></>
        </div>
        

        <img width="400" style={image} src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png"></img>
        <img width="40" style={image1} src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-logo-bg.png"></img>
        <img width="50" style={image2} src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon-bg.png"></img>
        
        


      </div>
    </>
  );
}

export default App;
