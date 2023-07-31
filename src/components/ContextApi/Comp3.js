import React, {useContext} from 'react'
import { GlobalInfo } from './Comp1'

const Comp3 = () => {

    const {colorGradient} = useContext(GlobalInfo);
    console.log(colorGradient)



  return (
    <div className='comp-right'>
        <h3 style={{ color: colorGradient }} >Right Branch: Compnent 2</h3>
    </div>
  )
}

export default Comp3;