import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/home'
import Apropos from './pages/APropos/apropos'
import FicheDeLogement from './pages/LogementPage/logementpage'
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<FicheDeLogement />} />
      </Routes>
      <Footer />
      {/* quelle est la bonne ecriture ? celle-ci ou la laisser dans le Route */}
    </Router>
  </React.StrictMode>
)
