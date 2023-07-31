import React from 'react'                    //Higher order function example
import './FilterCountry.css'

const FilterCountry = ({ onSelect }) => {

    const selectHandler = (e) => {
        const regionName = e.target.value;
        onSelect(regionName);
    }
  return (
    <select className='select_filter' onChange={selectHandler}>

        <option className='option'> 
        Filter By Region 
        </option>
        <option className='option' value="Africa">
            Africa
        </option>
        <option className='option' value="America">
            America
            </option>
        <option className='option' value="Asia">
            Asia
            </option>
        <option className='option' value="Europe">
            Europe
        </option>
        <option className='option' value="Oceania">
            Oceania
        </option>
        wecwec
    </select>
  )
}

export default FilterCountry