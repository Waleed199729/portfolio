import React, {useState} from 'react'
import '../CountryScreen.css'

const SearchInput = ({onSearch}) => {

    const [input, setInput] = useState('')

    
    
    const submitHandler = (e) => {
        e.preventDefault()

        onSearch(input)
    }   



  return (
    <form className='john1' onSubmit={submitHandler}>
        <input type='text' placeholder='Enter the Country Name' className='john' value={input}
        onChange={(e) => setInput(e.target.value)} />
    </form>
  )
}

export default SearchInput