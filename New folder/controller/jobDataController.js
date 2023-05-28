import newJOBModel from "../models/jobModel.js";
export const jobDataController = async (req, res) => {
    const { jobCompany, jobTitle, jobDec, jobType, jobLevel, jobSalary} = req.body;
    const newJOB =  new newJOBModel({
        jobCompany:jobCompany,
        jobTitle:jobTitle,
        jobDec:jobDec,
        jobType:jobType,
        jobLevel:jobLevel,
        jobSalary:jobSalary,
    })
    // console.log("🚀 ~ file: jobDataController.js:12 ~ jobDataController ~ newJOB", newJOB)
    
    try {
        await newJOB.save();
        res.json(newJOB);
        console.log("job created");
    } catch (error) {
        console.log("job not created"+ error);
    }
}