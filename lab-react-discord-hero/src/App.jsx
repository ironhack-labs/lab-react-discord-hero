import './App.css';
import Button from './components/button/button';
import Logo from './components/logo/logo';
import Menu from './components/menu/menu';
import Paragraph from './components/paragraph/paragraph';
import Title from './components/title/title';

function App() {
  return (
    <>
   <div className='header'>
    <Logo></Logo>
    <Menu></Menu>
    </div>

    <div className='content'>
      <Title text="IMAGINE A PLACE..."></Title>
      <Paragraph text="...where you can belong a school club, a gaming group, or a worldwide community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk everyday and hang out often"></Paragraph>
      <Button type="download" text="Download for Mac"></Button>
      <Button type="open" text="Open Discord in your browser"></Button>
    </div>
    </>
    
  
  
  );
}

export default App;