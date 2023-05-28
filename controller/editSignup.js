import signupModel from "../model/signup.js";

export const editSignup = async (req, res) => {
    let editSignup = req.body;


    try {
        await signupModel.updateOne({ _id: req.params.id }, editSignup);
        res.json(editSignup);
        console.log("updated created");

    } catch (error) {
        console.log("job not updated", error);
    }
}