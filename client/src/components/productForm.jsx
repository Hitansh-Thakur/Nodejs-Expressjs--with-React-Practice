import React from 'react'
import { useState, useEffect } from 'react'

const productForm = () => {
    // const [formData, setformData] = useState({})
    // TODO: try to use only single usestate
    const [Name, setName] = useState("")
    const [Price, setPrice] = useState("")
    const [Desc, setDesc] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        const formDataBody = JSON.stringify({
            p_name: Name,
            p_price: Price,
            p_desc: Desc,
        })

        const response = await fetch('http://localhost:5173/api/insert', {
            method: "POST",
            // headers:"Content-Type: text/json",
            headers: {
                'Content-Type': 'application/json',
            },
            body: formDataBody
        });
            
        const data = await response.json()
        console.log("Data:",data);
    }

    // useEffect(() => {
    // }, [])

    return (
        <>
            <h2 className='text-3xl font-semibold my-5' >Insert Product</h2>
            <form action="" method="post" className='form' onSubmit={handleSubmit}>
                <div className="form-field grid-">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="p_name" id="name" onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-field">
                    <label htmlFor="price">Price</label>
                    <input type="text" inputMode='numeric' name="p_price" id="price" onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="form-field">
                    <label htmlFor="Name">Description</label>
                    <textarea name="p_desc" id="desc" rows="5" className='resize-none' onChange={e => setDesc(e.target.value)}></textarea>
                </div>
                <div className="form-field row-start-3 ">
                    <input className="btn" type="submit" name="submit" id="name" value="Submit" />
                </div>
            </form>
        </>
    )
}

export default productForm