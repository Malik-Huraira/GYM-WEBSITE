import mongoose from "mongoose";

const ProductStructure = mongoose.Schema({

    img:String,
    name :String,
    description:String,
    price:String
});

const ProductModel = mongoose.model('Product List', ProductStructure);
export default ProductModel;