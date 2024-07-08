import React, { useState, useEffect } from 'react'
import ProductCard from './components/productCard'
import ProductForm from './components/productForm'

import './App.css'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  // TODO: learn REACT ROUTER AND ROUTEING THROUGH EXPRESS 




  return (
    <>
      <div className="w-10/12 mx-auto mt-3 ">
        <h1 className='text-4xl my-2'>React + Express</h1>
        <h2 className='text-2xl'>Data from server:</h2>
        <div id="data" className='flex flex-wrap gap-5 mx-auto my-4'>
          {
            products.map((product, i) => {
              // return <div key={i}>
              //   <h3>Name : {product.p_name}</h3>
              //   <h2>Price : {product.p_price}</h2>
              //   <p>Desc : {product.p_desc}</p>
              // </div>
              // TODO: mantain a local copy of product data and render productes throug it not directly foom db.the cards should rerender when a new product is inserted into database (useEffect)
              return <ProductCard name={product.p_name} price={product.p_price} desc={product.p_desc} />
            })
          }

          <ProductForm/>
        </div>
      </div>
    </>
  )
}

export default App
