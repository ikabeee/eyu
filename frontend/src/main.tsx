import { NextUIProvider } from '@nextui-org/react'
import { PrimeReactProvider } from 'primereact/api';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <PrimeReactProvider>
          <App />
        </PrimeReactProvider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
