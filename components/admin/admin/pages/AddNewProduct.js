
import React, { useState } from 'react'
import { addProduct } from "../../../../Service/api"

function AddNewProduct() {

  const [productData, setProductData] = useState([{
    img: "",
    name: "",
    description: "",
    price: ""
  }])

  // const { img, Name, Description, Price } = productData;

  const handleChange = (e) => {
    console.log(e.target.value)
    setProductData({...productData,[e.target.name]: e.target.value});
    console.log("product ", productData)
  }

  const addNow = async (e) => {
    e.preventDefault();
    console.log("add now produxt", productData);
    await addProduct(productData);

  }
  return (
    <div className='col-md-6 position-absolute start-50 translate-middle-x mt-5'>
      <form >
        <label className="mb-2">Img</label>
        <input className='form-control mb-3' name='img'
          onChange={(e) => handleChange(e)} />


        <label className="mb-2">Name</label>
        <input type="text" className='form-control mb-3' name='name'
          onChange={(e) => handleChange(e)} />

        <label className="mb-2">Description</label>
        <input type="text" className='form-control mb-3' name='description'
          onChange={(e) => handleChange(e)} />

        <label className="mb-2">Price</label>
        <input type="text" className='form-control mb-3' name='price'
          onChange={(e) => handleChange(e)} />

        <button className='btn btn-primary form-control' onClick={(e)=>addNow(e)}> BuyNow</button>
      </form>


    </div>
  )
}

export default AddNewProduct
