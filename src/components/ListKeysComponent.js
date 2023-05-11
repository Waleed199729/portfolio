import React, {useState} from 'react'
import ListKeys from './ListKeys';

const ListKeysComponent = () => {

    const [items, setItems] = useState([
        { id: 1, text: 'apple' },
        { id: 2, text: 'orange' },
        { id: 3, text: 'mango' },
      ]);
    
    
      const [updateFruit, setUpdateFruit] = useState('');
    
      
      const addItem = (event) => {
        event.preventDefault();
        const newItems = { id: items.length + 1, text:updateFruit };
        setItems([...items, newItems]);
        console.log(setItems)
      };

  return (
    <>
    <div>
      <h1> List of Fruits : </h1>
      <ListKeys items={items} />
        <input type='text' placeholder='enter fruit name' onChange={(e)=>setUpdateFruit(e.target.value)} />
        <button onClick={addItem}>Add Fruit</button>
      </div>
    </>
  )
}

export default ListKeysComponent


