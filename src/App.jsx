import "./App.css";
import Headline from "./components/Headline.jsx";
import Paragraph from "./components/Paragraph.jsx";
import Image from "./components/Image.jsx";
import Navbar from "./components/Navbar.jsx";
import Button from "./components/Button.jsx";

function App() {
  return (
    <>
      <Navbar logoImg="src/assets/discord-logo-white.png" menuImg="src/assets/menu-icon.png"/>
      <Headline content1="IMAGINE A" content2="PLACE..."/>
      <Paragraph content="...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often."/>
      <Image src="src/assets/discord-background.png" alt="discord-background" />
      <Button content="Download for Mac" className="light"/>
      <Button content="Open Discord in your browser" className="dark"/>
    </>
  );
}

export default App;
