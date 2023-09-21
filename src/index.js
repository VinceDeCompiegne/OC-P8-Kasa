import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Fiche from './pages/Fiche'
import Apropos from './pages/Apropos'
import Erreur404 from './pages/Erreur404'
import './style/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche/:appart" element={<Fiche />} />
          <Route path="/home" element={<Home />} />
          <Route path="/OC-P8-Kasa/" element={<Home />} />
          <Route path="/home/fiche/:appart" element={<Fiche />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/erreur" element={<Erreur404 />} />
          <Route path="*" element={<Erreur404 />} />            
        </Routes>
      </Router>
  </React.StrictMode>
 
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

