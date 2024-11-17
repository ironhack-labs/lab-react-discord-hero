import './App.css';
import NavBar from './components/ui/navbar/navbar';
import Button from './components/ui/button/button';
import Paragraph from './components/ui/paragraph/paragraph';
import Title from './components/ui/title/title';

function App() {
  return (
    <div>
      <NavBar/>

      <div className='section'>
        <Title text="IMAGINE A PLACE..."/>
        <Paragraph text="...where you can belong to a school club, a gaming group, or a worldwide
          art community. Where just you and a handful of friends can spend time
          together. A place that makes it ease to talk everyday and hang out more often"/>
        <Button type="download" text="Download for Mac"/>
        <Button type="open" text="Open Discord in your browser"/>
      </div>

      <img src="src/assets/discord-background.png" alt="image-background" className='background'/>
    </div>
  );
}

export default App;
