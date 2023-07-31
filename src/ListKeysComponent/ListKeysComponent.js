import React, { useState } from 'react'
import ListKeys from './ListKeys';
import './ListKeysComponent.css'

const ListKeysComponent = () => {

  const [items, setItems] = useState([
    { id: 1, text: 'apple' },
    { id: 2, text: 'orange' },
    { id: 3, text: 'mango' },
  ]);

  

  const [updateFruit, setUpdateFruit] = useState('');    //initial value in the usestate is null


  const addItem = (event) => {
    event.preventDefault();
    const newItems = { id: items.length + 1, text: updateFruit };
    setItems([...items, newItems]);
    console.log(setItems)
    

    handleSubmit();
    setUpdateFruit("");

  };

  const handleSubmit = () => {    // if i want to call more than 1 function on a single onClick={addItem} , so i will call the 2nd function in the first function that is "addItem()" e.g: are given above
    alert(`Are you sure to add this fruit name: ${updateFruit}`)
  }

  const handleDelete = () => {
    
  }
  return (
    <>
      <div className='main-listkeys'>
      <center><h2> List of Fruits </h2></center>

        <div className='listkeys-container'>
          <table style={{width:"100%"}}>
            <thead>
              <th>
                Fruit Name: 
              </th>
            </thead>

            <tbody>
            <ListKeys items={items} />
  
          <input type='text' value={updateFruit} placeholder='enter fruit name' onChange={(e) => setUpdateFruit(e.target.value)} />
            </tbody>
            <button className='btn-listKeys'   onClick={addItem}>Add Fruit</button>

           
          </table>
         
          
        </div>
      </div>
    </>
  )
}

export default ListKeysComponent


