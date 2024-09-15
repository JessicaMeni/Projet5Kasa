import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/home'
import Error from './components/Error/Error'
import Apropos from './pages/APropos/apropos'
import LogementPage from './pages/LogementPage/logementpage'
import Footer from './components/Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<LogementPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
