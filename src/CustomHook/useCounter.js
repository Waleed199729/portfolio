import React,{ useState } from 'react'

const useCounter = () => {

    
    const [count, setCount] = useState(0);

    const Increament = () => {
        setCount( count + 1);
    }

    const Decreament = () => {
        setCount( count - 1);
    }

    const Reset = () => {
       setCount(0);
    }


  return [count, Increament, Decreament, Reset]
}

export default useCounter