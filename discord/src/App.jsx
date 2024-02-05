import './App.css'
import NavBar from './components/NavBar/NavBar'
import Paragraph from './components/Paragraph/Paragraph'
import Title from './components/Title/Title'
import Button from './components/Button/Button'
import Image from './components/Photo/Photo'


function App() {


  return (

    <div className='App'>
      <NavBar />

      <Title />

      <Paragraph />



      <Button className="White" link={'#'} text={'Download for Mac'} />
      <Button className="Black" link={'#'} text={'Open Discord in your browser'} />

      <Image />



    </div>

  )




}

export default App
