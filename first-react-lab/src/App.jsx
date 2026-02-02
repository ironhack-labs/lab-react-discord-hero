import Content from './component/Content'
import './App.css'
import Header from './component/Header'
import Buttons from './component/Buttons'

function App() {

  return (
    <div className='container'>
      <Header/>
      {/* <div className='App'></div> */}
      <Content/>
      <Buttons/>
    </div>
  )
}

export default App
