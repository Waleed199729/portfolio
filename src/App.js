import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    
    <>
    <Navbar/>
      <BrowserRouter>
      
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/services" element={<Services />} />

        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
