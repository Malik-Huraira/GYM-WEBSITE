import newJOBModel from "../models/jobModel.js";

export const deleteSingleJobController = async (req, res) => {
    try {
        await newJOBModel.deleteOne({_id: req.params.id});
        res.json("Deleted");
        
    } catch (error) {
        
    }
}