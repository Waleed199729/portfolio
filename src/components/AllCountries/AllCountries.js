import React, { useState, useEffect } from 'react'
import { apiURL } from "../utils/api";
import { Container } from 'react-bootstrap';
import FilterCountry from '../FilterCountry/FilterCountry';
import SearchInput from '../Search/SearchInput';

import { Link } from 'react-router-dom';

const AllCountries = () => {

    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const getAllCountries = async () => {
        try {
            const res = await fetch(`${apiURL}/all`);

            if (!res.ok) throw new Error("Some Think went Wrong Waleed!");

            const data = await res.json();
            console.log(data);

            setCountries(data);
            setIsLoading(false);

        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    };





    const getCountryByName = async (countryName) => {
        try {
            const res = await fetch(`${apiURL}/name/${countryName}`);

            if (!res.ok) throw new Error(" Unable to find the Country / there is no country with this name ");

            const data = await res.json();
            setCountries(data);

            setIsLoading(false);

        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    }


    const getCountryByRegion = async (regionName) => {
        try {
            const res = await fetch(`${apiURL}/region/${regionName}`);

            if (!res.ok) throw new Error("It's Failed........");

            const data = await res.json();
            setCountries(data);

            isLoading(false);

        } catch (error) {
            setIsLoading(false);
            setError(false);
        }
    };


    useEffect(() => {
        getAllCountries();
    }, []);


    return (
        <div className='all__country__wrapper'>

            <div className='country_top'>
                <div className='search'>
                    <SearchInput onSearch={getCountryByName} />
                </div>

                <div className='filter'>
                    <FilterCountry onSelect={getCountryByRegion} />
                </div>

            </div>



            <div className='country_bottom'>
                <table style={{ width: '100%' }}>
                    <thead className='suuny'>
                        <th>
                            <h4> Name</h4>
                        </th>
                        <th>
                            <h4> Capital</h4>
                        </th>
                        <th>
                            <h4> Population</h4>
                        </th>
                        <th>
                            <h4> Region</h4>
                        </th>
                        <th>
                            <h4> Flag</h4>
                        </th>
                    </thead>

                    {isLoading && !error && <h4> Loading...........</h4>}
                    {error && !isLoading && <h4> {error} </h4>}
                    <tbody>
                        {

                            countries?.map(country => (
                             
                                    <tr>
                                    <td> <h6>{country.name.common}</h6></td>
                                    <td>  <h6> Capital: {country.capital}</h6> </td>
                                    <td><h6> Population: {country.population} </h6></td>
                                    <td> <h6>Region: {country.region}</h6></td>
                                    <td> <img style={{ height: "3rem" }} src={country.flags.png} alt='image' /></td>
                                </tr>
                                
                            ))

                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default AllCountries



                        // <div className='country-card'>

                        //     <div className='country-img'>
                        //         <img src={country.flags.png}  alt='image' />
                        //     </div>

                        //     <div className='country-data'>
                        //         <h3>{country.name.common}</h3>
                        //         <h6> Population: {country.population} </h6>
                        //         <h6>Region: {country.region}</h6>
                        //         <h6> Capital: {country.capital}</h6>
                        //     </div>

                        // </div>