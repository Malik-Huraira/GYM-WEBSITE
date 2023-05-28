import ProductModel from "../model/AddProducts.js";
export const getSingleProductController = async (req, res) => {
    try {
        const result = await ProductModel.findById(req.params.id);
        res.json(result);
    } catch (error) {
        console.log(error)
    }
}