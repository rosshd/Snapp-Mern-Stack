import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <img src="/assets/mainLogo.webp" alt="logo" className='hidden' />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
