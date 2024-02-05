import './App.css'
import NavBar from './components/NavBar/NavBar'
import Title from './components/Title/Title'

function App() {

  return (

    <div className="App">

      <NavBar />

      <Title title={'imagine a place...'} text={"We just learned the basics of React, JSX and how to set up a new React app using Vite. In this exercise, we will apply the newly acquired React skills to clone the landing page of Discord, specifically, the hero section. The hero section refers to the first part of a webpage that user sees before they scroll down, and is meant to quickly catch the viewer's attention. Let's get started!"} />




    </div>
  )
}

export default App
