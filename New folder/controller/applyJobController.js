import newApplyJobModel from "../models/applyJobModel.js";
export const applyJobController = async (req, res) => {
    const {
            name,
            address,
            city,
            state,
            zipCode,
            email,
            number,
            schoolName,
            schoolLocation,
            schoolJoinedYear,
            schoolDegreeReceivedYear,
            schoolDegreeMajor,
            collegeName,
            collegeLocation,
            collegeJoinedYear,
            collegeDegreeReceivedYear,
            collegeDegreeMajor,
            universityName,
            universityLocation,
            universityJoinedYear,
            universityDegreeReceivedYear,
            universityDegreeMajor,
            jobCompany,
            jobLocation,
            jobJoinedDate,
            jobLeftDate
        } = req.body;
    const applyJob = new newApplyJobModel({
            name:name,
            address:address,
            city: city,
            state:state,
            zipCode: zipCode,
            email:email,
            number:number,
            schoolName: schoolName,
            schoolLocation: schoolLocation,
            schoolJoinedYear:schoolJoinedYear,
            schoolDegreeReceivedYear: schoolDegreeReceivedYear,
            schoolDegreeMajor:schoolDegreeMajor,
            collegeName:collegeName,
            collegeLocation: collegeLocation,
            collegeJoinedYear: collegeJoinedYear,
            collegeDegreeReceivedYear:collegeDegreeReceivedYear,
            collegeDegreeMajor:collegeDegreeMajor,
            universityName:universityName,
            universityLocation:universityLocation,
            universityJoinedYear:universityJoinedYear,
            universityDegreeReceivedYear:universityDegreeReceivedYear,
            universityDegreeMajor:universityDegreeMajor,
            jobCompany:jobCompany,
            jobLocation:jobLocation,
            jobJoinedDate: jobJoinedDate,
            jobLeftDate: jobLeftDate,
    })
    // console.log("🚀 ~ file: jobDataController.js:12 ~ jobDataController ~ newJOB", newJOB)

    try {
        await applyJob.save();
        res.json(applyJob);
        console.log("job apply created");
    } catch (error) {
        console.log("job apply not created", error);
    }
}