import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CountryScreen from './components/CountryScreen';
import ListKeysComponent from './ListKeysComponent/ListKeysComponent'
import FormHandling from './components/FormHandling/FormHandling';
import UsersCustomHook from './CustomHook/UsersCustomHook'
import Comp1 from './components/ContextApi/Comp1'
import RegisterForm from './components/RegistrationForm/RegisterForm'

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
          <Route path="/form" element={<FormHandling/>} />
          <Route path="/user" element={<UsersCustomHook />} />
          <Route path="/comp" element={<Comp1 />} />
        
          <Route path="/registerform" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
        </>
     
      )
};

export default App


      
