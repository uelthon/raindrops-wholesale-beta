import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import './styles/global.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router basename='/beta-dashboard'>
    <App />
  </Router>
)
