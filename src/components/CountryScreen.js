import React from 'react'
import './CountryScreen.css'
import { Routes, Route } from 'react-router-dom'
import AllCountries from './AllCountries/AllCountries'


const CountryScreen = () => {
    return (
        <>
            <div className='header'>
                <h2> Where is the Country </h2>
            </div>

            <div className='container'>
                <Routes>
                    <Route path='/' element={< AllCountries />} />
                
                </Routes>
            </div>
        </>
    )
}

export default CountryScreen