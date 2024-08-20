import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Fiche from './pages/FichesDeLogement/ficheDeLogement'
import Header from './components/Header/header'
import Banner from './components/Banner/banner'
import Footer from './components/Footer/footer'
import Error from './components/Error/error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="banner" element={<Banner />} />
        {/* <Route path="/FichesDeLogement" element={<Fiche />} /> */}
        {/* <Route index element={<Footer />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      {/* quelle est la bonne ecriture ? celle ci ou <Route index element={<Footer />} /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
