import signupModel from "../model/signup.js";
export const deleteSignup = async (req, res) => {
    try {
        await signupModel.deleteOne({ _id: req.params.id });

    } catch (error) {

    }
}