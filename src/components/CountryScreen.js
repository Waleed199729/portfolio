import React from 'react'
import './CountryScreen.css'
import { Routes, Route } from 'react-router-dom'
import AllCountries from './AllCountries/AllCountries'
import CountryInfo from './CountryInfo/CountryInfo'

const CountryScreen = () => {
    return (
        <>
            <div className='header'>
                <h2> Where is the Country </h2>
            </div>

            <div className='container'>
                <Routes>
                    <Route path='/' element={< AllCountries />} />
                    <Route path='/country/countryName' element={< CountryInfo />} />
                </Routes>
            </div>
        </>
    )
}

export default CountryScreen