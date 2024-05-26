import { useState } from 'react';
import Body from './assets/Body';
import Header from './assets/Header';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>

      <Header/>
      <Body/>
    </div>
  )
}

export default App;
