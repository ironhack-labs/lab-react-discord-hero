
import './App.css'
import Button from './components/Button'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='container'>
      <NavBar/>
      <h1>Image A Place...</h1>
      <p className='descr'>...where you can belong to school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together.
      </p>
      <div>

      </div>
      <Button color={'#1a1a1a'} label={'Download for Mac'}/>
      <Button textColor={'black'} color={'#fff'} label={'Open discord in your browser'}/>
    </div>
  )
}

export default App
