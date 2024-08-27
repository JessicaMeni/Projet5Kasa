import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/home'
/* import Fiche from './pages/FichesDeLogement/ficheDeLogement' */
import Apropos from './pages/APropos/apropos'

import Footer from './components/Footer/footer'
import Error from './components/Error/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/FichesDeLogement" element={<Fiche />} /> */}
        <Route path="*" element={<Error />} />
        <Route path="/Apropos" element={<Apropos />} />
      </Routes>
      <Footer />
      {/* quelle est la bonne ecriture ? celle-ci ou la laisser dans le Route */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
