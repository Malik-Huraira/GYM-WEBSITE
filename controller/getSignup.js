import signupModel from "../model/signup.js";
export const getSignup = async (req, res) => {
    try {
        const result = await signupModel.findById(req.params.id);
        res.json(result);
    } catch (error) {
        console.log(error)
    }
}