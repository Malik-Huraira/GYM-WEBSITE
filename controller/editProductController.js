import ProductModel from "../model/AddProducts.js";

export const editSingleProductController = async (req, res) => {
    let editProduct = req.body;
   

    try {
        await ProductModel.updateOne({ _id: req.params.id }, editProduct);
        res.json(editProduct);
        console.log("updated created");

    } catch (error) {
        console.log("job not updated", error);
    }
}