import mongoose from "mongoose";

const jobDetail = mongoose.Schema(
    {
        jobCompany: {
            type: String,

            required: true,
        },
        jobTitle: {
            type: String,

            required: true,
        },
        jobDec: {
            type: String,

            required: true,
        },
        jobType: {
            type: String,

            required: true,
        },
        jobLevel: {
            type: String,

            required: true,
        },
        jobSalary: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);


const newJOBModel = mongoose.model("jobDetail", jobDetail);

export default newJOBModel;