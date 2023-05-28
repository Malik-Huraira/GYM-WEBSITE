import mongoose from "mongoose";

const applyJobModel = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zipCode: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        schoolName: {
            type: String,
            required: true,
        },
        schoolLocation: {
            type: String,
            required: true,
        },
        schoolJoinedYear: {
            type: String,
            required: true,
        },
        schoolDegreeReceivedYear: {
            type: String,
            required: true,
        },
        schoolDegreeMajor: {
            type: String,
            required: true,
        },
        collegeName: {
            type: String,
            required: true,
        },
        collegeLocation: {
            type: String,
            required: true,
        },
        collegeJoinedYear: {
            type: String,
            required: true,
        },
        collegeDegreeReceivedYear: {
            type: String,
            required: true,
        },
        collegeDegreeMajor: {
            type: String,
            required: true,
        },
        universityName: {
            type: String,
            required: true,
        },
        universityLocation: {
            type: String,
            required: true,
        },
        universityJoinedYear: {
            type: String,
            required: true,
        },
        universityDegreeReceivedYear: {
            type: String,
            required: true,
        },
        universityDegreeMajor: {
            type: String,
            required: true,
        },
        jobCompany: {
            type: String,
            required: true,
        },
        jobLocation: {
            type: String,
            required: true,
        },
        jobJoinedDate: {
            type: String,
            required: true,
        },
        jobLeftDate: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const newApplyJobModel = mongoose.model("jobApplyData", applyJobModel);

export default newApplyJobModel;