const styles = {
  backgroundColor:"rgb(55, 97, 235)",
  width:"500px"

  // backgroundColor:red,
}
import './App.css'
import NavBar from './NavBar'
import Section1 from './Section1'

function App() {

  return (
    <div className='App' style={styles}>
      <NavBar />

      <Section1 />

    </div>
  )
}

export default App
