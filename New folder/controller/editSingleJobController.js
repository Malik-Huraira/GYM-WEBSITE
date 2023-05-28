import newJOBModel from "../models/jobModel.js";
export const editSingleJobController = async (req, res) => {
    let editUser = req.body;
    // console.log("🚀 ~ file: editSingleJobController.js:4 ~ editSingleJobController ~ editUser", editUser)
    const editedUser =  new newJOBModel(editUser);
    // console.log("🚀 ~ file: editSingleJobController.js:6 ~ editSingleJobController ~ editedUser", editedUser)
  
    
    try {
        await newJOBModel.updateOne({_id: req.params.id}, editUser);
        response.status(201).json(editUser);
        res.json(editedUser);
        console.log("updated created");
        
    } catch (error) {
        console.log("job not updated", error);
    }
}