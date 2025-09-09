import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

////////////////// possibilité de supprimer le StrictMode //////////////////
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
////////////////// Remplacer par : //////////////////
createRoot(document.getElementById('root')).render(<App />)