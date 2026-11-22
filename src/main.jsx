import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Discord from './components/discord.jsx'
import './components/discord.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Discord />
  </StrictMode>,
)
