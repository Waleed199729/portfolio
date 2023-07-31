import React from 'react'    
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav class="jani navbar navbar-expand-lg navbar-light  bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">AppsGenii</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/services">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contactus">Contact Us</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/countryscreen"> Country List </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/form"> Form </a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="/list"> List Keys component </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/user"> User's Details </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/comp"> Context API </a>
              </li>


              <li class="nav-item">
                <a class="nav-link" href="/registerform"> Registrater Form </a>
              </li>
             

              {/* <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar