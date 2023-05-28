import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { editProduct, getProduct } from '../../../../Service/api';
const EditProduct = () => {
    const { id } = useParams();
    useEffect(() => {
        getInitialProductDetails()
    }, [])




    const [productData, setProductData] = useState([{
        img: "",
        name: "",
        description: "",
        price: ""
    }])

    const getInitialProductDetails = async () => {
        const result = await getProduct(id);
        setProductData(result.data);
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setProductData({ ...productData, [e.target.name]: e.target.value });
        console.log("product ", productData)
    }

    const addNow = async (e) => {
        e.preventDefault();
        console.log("add now product", productData);
        await editProduct(productData, id);
    }
    return (
        <div className='col-md-6 position-absolute start-50 translate-middle-x mt-5'>
            <form >
                <label className="mb-2">Img</label>
                <input className='form-control mb-3' name='img' value={productData.img}
                    onChange={(e) => handleChange(e)} />


                <label className="mb-2">Name</label>
                <input type="text" className='form-control mb-3' name='name' value={productData.name}
                    onChange={(e) => handleChange(e)} />

                <label className="mb-2">Description</label>
                <input type="text" className='form-control mb-3' name='description' value={productData.description}
                    onChange={(e) => handleChange(e)} />

                <label className="mb-2">Price</label>
                <input type="text" className='form-control mb-3' name='price' value={productData.price}
                    onChange={(e) => handleChange(e)} />

                <button className='btn btn-primary form-control' onClick={(e) => addNow(e)}> Submit Changes</button>
            </form>


        </div>
    )
}

export default EditProduct
