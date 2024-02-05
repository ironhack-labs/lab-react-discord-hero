import './App.css'
import discordImage from './../src/assets/discord-background.png'
import Navbar from './components/Navbar/Navbar'
import Title from './Components/Title/Title'
import Paragraph from './Components/Paragraph/Paragraph'
import Button from './components/Button/Button'

function App() {


  return (
    <div className='App'>
      <Navbar />
      <Title title={'Imagine a place...'} />
      <Paragraph paragraph={'... where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.'} />

      <div className='buttons'>
        <Button text={'Download for Mac'} />
        <Button className='browser-button' text={'Open Discord in your browser'} />
      </div>

      <div className='discord-image'>
        <img src={discordImage} alt="Discord image" />
      </div>
    </div>
  )
}

export default App
