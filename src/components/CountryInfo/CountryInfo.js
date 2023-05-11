// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { apiURL } from '../utils/api'
// import { Link } from 'react-router-dom'
// import './CountryInfo.css'; 

// const CountryInfo = () => {

//   const [country, setCountry] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState('');

//   const { countryName } = useParams();

//   const getCountryByName = async () => {
//     try {

//       const res = await fetch(`${apiURL}/name/${countryName}`);

//       if (!res.ok) throw new Error(" Could not fount the Information");

//       const data = await res.json();
//       setCountry(data);
//       setIsLoading(false);

//     } catch (error) {

//       setIsLoading(false);
//       setError(error.message);

//     }
//   }

//   useEffect(() => {
//     getCountryByName();
//   }, [countryName])





//   return (
//     <div className='country__info__wrapper'>
//       <button><Link to='/'> Go Back </Link></button>

//       {
//         country?.map((country, index) => (

//           <div className='country__info__con'>
//               <div className='country__info__img'> <img src={country.flags.png} alt='image'/> </div>

              
              
//               <div className='country__info'>

//                 <div className='country__info__left'>
//                   <h5>
//                     Native Name: <span>{country.name.common}</span>
//                   </h5>
//                   <h5>
//                     Population: <span>{country.population}</span>
//                   </h5>
//                   <h5>
//                     Region: <span>{country.region}</span>
//                   </h5>
//                   <h5>
//                     Sub Region: <span>{country.subRegion}</span>
//                   </h5>
//                 </div>

//               </div>
//           </div>
          
          
//         )) 
//       }
//     </div>
//   )
// }

// export default CountryInfo