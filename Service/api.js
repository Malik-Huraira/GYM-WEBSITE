
import axios from "axios";


const url = "http://localhost:5000";

export const addProduct =async (productData) => {
    console.log("product data==>", productData);
    await axios.post(`${url}/admin/addNewProduct`, productData).catch((e)=>console.log(e));
}
export const sendSignupData =async (productData) => {
  await axios.post(`${url}/Signup`, productData).catch((e)=>console.log(e));
}

export const getCustomerListApi =async()=>{
  return await  axios.get(`${url}/admin/dashboard`)
}
export const getProductListApi =async()=>{
  return await axios.get(`${url}/admin/allProducts`)
}
export const deleteProduct =async(id)=>{
  return await axios.delete(`${url}/admin/allProducts/${id}`)
}
export const getProduct =async(id)=>{
  return await axios.get(`${url}/admin/allProducts/${id}`)
}
export const editProduct =async(data, id)=>{
  return await axios.get(`${url}/admin/allProducts/${id}`, data)
}
// delete and edit for signup
export const deleteData = async (id) => {
  return await axios.delete(`${url}/admin/dashboard/${id}`)
}
export const getData = async (id) => {
  return await axios.get(`${url}/admin/dashboard/${id}`)
}
export const editData = async (data, id) => {
  return await axios.get(`${url}/admin/dashboard/${id}`, data)
}