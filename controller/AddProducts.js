import ProductModel from "../model/AddProducts.js";


export const AddingProducts = async (req, res) => {
  
   const {img, name, description, price} = req.body;

    const newProduct= new ProductModel({
        img: img,
        name: name,
        description:description,
        price:price
    });

    try {
        await newProduct.save(); 
       res.json(newProduct);
    } catch (error) {
        console.log("Not saved...");
    }



};