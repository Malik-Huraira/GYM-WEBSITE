import newJOBModel from "../models/jobModel.js"
export const getSingleUserController = async (req, res) => {
   try {
    const result = await newJOBModel.findById(req.params.id);
    res.json(result);
   } catch (error) {
    console.log(error)
   }
}