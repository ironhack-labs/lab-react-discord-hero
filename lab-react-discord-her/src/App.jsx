
import "./App.css"
import Banner from "./components/banner/banner.jsx"
import Content from "./components/content/content.jsx"
import Buttons from "./components/buttons/buttons.jsx"
import Image from "./components/image/image.jsx"


function App() {
  return (
    
    <div>
      <div className="App">
        <Banner />
      </div>
      <div className="App">
        <Content 
        title="IMAGINE A
        PLACE..."
        text="…where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often."
        />
      </div>
      <div>
        <Buttons text1="Download for Mac" text2="Open Discord in your browser"/>
        <Image />
      </div>
    </div>
    
  );
}

export default App
