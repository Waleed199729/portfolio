import React from 'react'

const ListKeys = (props) => {


    const items = props.items.map((item) =>
        <li key={item.id}>{item.text}</li>
    );


    return (
        <>
            <div>
                <ul>
                    {items}
                </ul>

            </div>

        </>
    )
}


export default ListKeys





