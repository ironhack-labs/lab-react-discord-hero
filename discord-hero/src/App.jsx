import "./index.css";
import Navbar from "./assets/components/Navbar.jsx";
import Logotype from "./assets/components/Logotype.jsx";
import Menu from "./assets/components/Menu.jsx";
import MenuItem from "./assets/components/MenuItem.jsx";
import Card from "./assets/components/Card.jsx";
import CardBody from "./assets/components/CardBody.jsx";

import logo from "./assets/images/backgrounds/bg-discord-logo-white.png";
import menu from "./assets/images/icons/menu-icon.png";
import people from "./assets/images/backgrounds/bg-discord-people.png";


function App() {

  const logoData = {
    logoUrl: logo,
    logoAltName: "Logotipo Discord Blanco"
  };

  const body = {
    title: "Imagine a place...",
    subtitle: "Where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk everyday and hang out more often.",
    button1: {
      text: "Download for Mac",
      textColor: "black",
      backgroundColor: "white"
    },
    button2: {
      text: "Open Discord in your browser",
      textColor: "white",
      backgroundColor: "black"
    }
  }

  return (
    <div className="app">
      <Navbar>
        <Logotype data={logoData}/>
        <Menu>
          <MenuItem>
            <img src={menu} alt="Menú Hamburguesa" />
          </MenuItem>
        </Menu>
      </Navbar>
      <Card className="me-5 pe-5">
        <CardBody body={body} />
      </Card>
      <img className="background-img" src={people} alt="People enjoying" />
    </div>
  )
}

export default App;
