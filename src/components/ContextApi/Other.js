import React, {useContext} from 'react'
import { GlobalInfo } from './Comp1'

const Comp3 = () => {

    const {colorGradient} = useContext(GlobalInfo);
    console.log(colorGradient)


    
  return (
    <div className='comp-left'>
        <h3 style={{ color: colorGradient }} > Left Branch: Compnent 1</h3>
    </div>
  )
}

export default Comp3;