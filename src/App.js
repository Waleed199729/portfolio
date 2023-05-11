import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CountryScreen from './components/CountryScreen';
import ListKeysComponent from './components/ListKeysComponent';



const App = () => {

  

  return (
    <>
 
      <Navbar />
      <BrowserRouter>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/countryscreen" element={<CountryScreen />} />
          <Route path="/list" element={<ListKeysComponent/>} />

        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
        </>
     
      )
};

export default App


      
