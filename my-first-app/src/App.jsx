import './App.css'
import Button from './components/buttons'
import NavBar from './components/navbar'
import Text from './components/text'
import Title from './components/title'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Title />
      <Text />
      <Button content={"Download for Mac"} bgColor={"white"} />
      <Button content={"Open Discord in your browser"} bgColor={"black"} color={"white"}/>
    </div>
  )
}

export default App
