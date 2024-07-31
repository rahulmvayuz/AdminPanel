import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterConfiguration } from './router/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterConfiguration />;
  </React.StrictMode>,
)
