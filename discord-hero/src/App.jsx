import './App.css'
import NavBar from './assets/components/NavBar.jsx'
import Title from './assets/components/Title.jsx'
import Body from './assets/components/Body.jsx'
import Button from './assets/components/Button.jsx'

function App() {
  return (
    <>
      <NavBar/>
      <Title text={'imagine a place...'}/>
      <Body/>
      <Button link={'#'} text={'Download for Mac'}/>
      <Button link={'#'} text={'Open Discord in your browser'}/>
    </>
  )
}

export default App
