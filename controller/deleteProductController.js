export const deleteProductController = async (req, res) => {
    try {
        await ProductModel.deleteOne({ _id: req.params.id });

    } catch (error) {

    }
}