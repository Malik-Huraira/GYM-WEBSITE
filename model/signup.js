import mongoose from "mongoose";

const SignupStructure = mongoose.Schema(
    {
        username: {
            type: String
        },
        password: {
            type: String
        },
        cgpa: {
            type: String
        },
        img:{
            type:String
        }

    }, 
);

const SignupModel = mongoose.model('SignupList', SignupStructure);
export default SignupModel;