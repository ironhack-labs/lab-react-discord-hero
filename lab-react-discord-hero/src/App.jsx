import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Title from './Components/Title/Title'
import Button from './Components/Button/Button'

function App() {
  return (
    <div className='App'>

      <NavBar />

      <Title
        text={'Imagine a place...'}
        paragraph={'...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.'} />

      <Button
        text={'Download for Mac'}>
      </Button>
      <Button
        className='button-black'
        text={'Open Discord in your browser'}>
      </Button>





    </div>
  )
}

export default App
