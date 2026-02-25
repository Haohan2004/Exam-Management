import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Sidebar from "./Component/Sidebar.tsx";
import Header from "./Component/Header.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <div className="fixed">
          <Header/>
          </div>
          <Sidebar/>
    <App />
      </BrowserRouter>
  </StrictMode>,
)
