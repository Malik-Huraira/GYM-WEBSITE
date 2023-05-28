import React from 'react'
import { getProductListApi, deleteProduct } from '../../../../Service/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function AllProducts() {

  useEffect(() => {
    getCustomerList();
  }, [])
  const [productList, setProductList] = useState([{}]);



  const getCustomerList = async () => {
    const response = await getProductListApi();
    console.log("product list data", response.data)
    setProductList(response.data);
    console.log("product list",productList)
  }
  const handleDelete = async (id) => {
    await deleteProduct(id);
    getCustomerList();
  }
  
  return (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
              productList.map((pr, index)=>{
                return(
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{pr.name}</td>
                    <td>{pr.price}</td>
                    <td>{pr.description}</td>
                    <td>
                      <Link to={`/admin/allProducts/${pr._id}`}><button>Edit</button></Link>
                      <button onClick={() => handleDelete(pr._id)}>Delete</button>
                    </td>
                  </tr>
                )
              })
          }
           
        </tbody>
      </table>
    </div>
  )
}

export default AllProducts
