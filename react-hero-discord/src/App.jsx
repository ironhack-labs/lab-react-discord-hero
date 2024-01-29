// src/App.jsx
import "./App.css";
import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";
import background from "./assets/discord-background.png";

const Title = (props) => {
  const titleText = props.children;
  return <div className="heading">{titleText.toUpperCase()}</div>;
};
const Button = (props) => {
  const { children, background, color } = props;
  const buttonStyle = {
    background,
    color,
  };
  return (
    <button className="button" style={buttonStyle}>
      {children}
    </button>
  );
};

function App() {
  const title = "Imagine a place...";
  const description =
    "...where you can belong to a school club, a gaming group, or a worlwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk everyday and hangout more often.";

  return (
    <div className="App">
      <img src={logo} alt="logo" className="logo" />
      <img src={menu} alt="menu" className="menu" />
      <Title>{title}</Title>
      <div className="text">{description}</div>
      <Button background="white" color="#232729">
        Download for Mac
      </Button>
      <Button background="#232729" color="white">
        Open Discord in your browser
      </Button>
      <img src={background} alt="background" className="background" />
    </div>
  );
}

export default App;
