import React, {useContext} from 'react'
import { GlobalInfo } from './Comp1'
import Comp3 from './Comp3';

const Comp2 = () => {

    const {colorGradient} = useContext(GlobalInfo);
    console.log(colorGradient)



  return (
    <div className='comp-right'>
       
        <h3 style={{ color: colorGradient }} > Right Brand: Compnent 1</h3>

        <Comp3/>

    </div>
  )
}

export default Comp2;