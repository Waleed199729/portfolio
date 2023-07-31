import React, {createContext, useState} from 'react'                 //Creating the Context
import Comp2 from './Comp2'
import Other from './Other'
import './Comp.css'


export const GlobalInfo = createContext();

                                                               // Context Module


const Comp1 = () => {

    const [color, setColor] = useState('Blue')



  return (
    <GlobalInfo.Provider value={{colorGradient: color}}>
    <div className='comp-right'>
        <h3> Main Component </h3>
        <Comp2/>
        <Other />
    </div>
    </GlobalInfo.Provider>

  )
}

export default Comp1