import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { registerSW } from 'virtual:pwa-register'

import App from './App.tsx'
import './index.css'
import { AppProvider } from './context/appContext.tsx';


const updateSW = registerSW({
  onOfflineReady() {},
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
