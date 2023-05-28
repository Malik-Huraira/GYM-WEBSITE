import mongoose from "mongoose";

const jobCategory = mongoose.Schema(
    {
        jobCatTitle: {
            type: String,
            required: true,
        },
        jobCatLogo: {
            type: String,
            required: true,
        },
        jobCatDesc: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const newJobCategory = mongoose.model("jobCategory", jobCategory);

export default newJobCategory;