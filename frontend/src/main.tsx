import { NextUIProvider } from '@nextui-org/react'
import { PrimeReactProvider } from 'primereact/api';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
        <PrimeReactProvider>
          <App />
        </PrimeReactProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
