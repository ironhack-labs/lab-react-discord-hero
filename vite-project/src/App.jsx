import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImgBcg from './components/ImgBcg'
import Navbar from './components/Navbar'
import Text from './components/Text'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='App'>
			<Navbar />
			<Text />
			<ImgBcg />
		</div>
	)
}

export default App
