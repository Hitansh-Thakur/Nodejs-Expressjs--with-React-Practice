import React from 'react'
import { useState, useEffect } from 'react'

const productForm = () => {
    const [formData, setformData] = useState({})

    function handleSubmit(e) {
        e.preventDefault()
        setformData({
            p_name : e.target.p_name.value,
            p_price : e.target.p_price.value,
            p_desc : e.target.p_desc.value,
        })
        fetch('http://localhost:5173/api/insert',{
            method:"POST",
            body: formData
        })
    }

    // useEffect(() => {
    // }, [])
    
    return (
        <>
            <h2 className='text-3xl font-semibold my-5' >Insert Product</h2>
            <form action="" method="post" className='form' onSubmit={handleSubmit}>
                <div className="form-field grid-">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="p_name" id="name" />
                </div>
                <div className="form-field">
                    <label htmlFor="price">Price</label>
                    <input type="text" inputMode='numeric'  name="p_price" id="price" />
                </div>
                <div className="form-field">
                    <label htmlFor="Name">Description</label>
                    <textarea name="p_desc" id="desc" rows="5" className='resize-none' ></textarea>
                </div>
                <div className="form-field row-start-3 ">
                    <input className="btn" type="submit" name="submit" id="name" value="Submit" />
                </div>
            </form>
        </>
    )
}

export default productForm