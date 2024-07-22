import React from 'react'
const AddProduct = () => {
  return (
    <div className='addproduct-container'>   
            {/* < Navbar/> */}

            {/* Name: body.Name,
        Price:body.price,
        ProductNumber:body.ProductNumber,
        ImgSrc: body.ImgSrc,
        ProductDescription: body.ProductDescription */}
            <div className='form-container'>
                    <form action='http://localhost:9000/api/createProduct/' method='post' >
                        <label>Name</label>
                        <input className='inp-box' type='text' name='name'/>
                        <label>Price</label>
                        <input className='inp-box' type='text' name='price'/>
                        <label>Product Number</label>
                        <input className='inp-box' type='text' name='productNumber'/>
                        <label>Image Link</label>
                        <input className='inp-box' type='text' name='imgSrc'/>
                        <label>Product Description</label>
                        <input className='inp-box' type='text' name='textDescription'/>
                        <button className='box' type='submit'>Submit</button>
                    </form>
            </div>
    </div>
  )
}

export default AddProduct
