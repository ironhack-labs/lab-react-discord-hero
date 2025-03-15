// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { SiteHeader } from './components/SiteHeader'
import { SiteContent } from './components/SiteContent'
import DownloadButton from './components/DownloadButton'
import PreviewButton from './components/PreviewButton'
import './App.css'

function App() {

  return (
    
      <div className="App">
        <SiteHeader />
        <SiteContent />
        <DownloadButton />
        <PreviewButton id = "PreviewButton" />
      </div>
    
  )
}

export default App
