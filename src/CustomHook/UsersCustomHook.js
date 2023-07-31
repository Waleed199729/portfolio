import React from 'react';
import useFetchData from './useFetchData'
import useCounter from './useCounter';
import { apiURL1 } from '../components/utils/api';
import './UsersCustomHook.css';
 
function UsersCustomHook() {
    const { data } = useFetchData(`${apiURL1}`);

    const [count, Increament, Decreament, Reset] = useCounter();





  return (
    <>
      <div className='main__customhook'>
          <center><h2> User's Details </h2></center>
          <center><h3> This is done byCustom Hook Functionality </h3></center>
        <table  style={{ width: '100%' }}>
            <thead className='suuny'>
                <th>
                    Company ID
                </th>
                <th>
                    User ID
                </th>
                <th>
                     Title
                </th>
                <th>
                    Details
                </th>
            </thead>

            <tbody>
            {
            data?.map((country) =>(
                <tr>
                <td> <h6>{country.userId}</h6></td>
                <td>  <h6> User: {country.id}</h6> </td>
                <td><h6> {country.title} </h6></td>
                <td> <h6> {country.body}</h6></td>
                
            </tr>
            ))
          }
            </tbody>
        </table>
         
      </div>
      <div className='custom__counter'>
       <h1> Counter By Custom Hook</h1>
        <h3> {count} </h3>
        <div className='counter__button'>
        <button className=' ' onClick={Increament}> Increament </button>
        <button className=' ' onClick={Reset}> Reset </button>
        <button className=' ' onClick={Decreament}> Decreament </button>
        </div>
        
      </div>

      </>
  )
}

export default UsersCustomHook;