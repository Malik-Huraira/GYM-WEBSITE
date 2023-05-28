import newJOBModel from "../models/jobModel.js"
export const getJobsController = async (req, res) => {
   try {
    const result = await newJOBModel.find();
   //  console.log("🚀 ~ file: getJobsController.js:5 ~ getJobsController ~ result", result)
    res.json(result);
   } catch (error) {
    console.log(error)
   }
}