import React from 'react'

const ProductCard = ({ name, price, desc }) => {
    return (
        <div className=' card'>
            <h3 className='font-bold '>Name : {name}</h3>
            <h2>Price : {price}</h2>
            <p>Desc : {desc}</p>
        </div>
    )
}

export default ProductCard

