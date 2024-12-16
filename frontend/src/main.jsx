import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Second_Page from './pages/Second_Page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Second_Page />
  </StrictMode>,
)
