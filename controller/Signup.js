import ProductModel from "../model/AddProducts.js";
import SignupModel from "../model/signup.js";

export const signUpCustomerList = async (req, res) => {
    console.log("SignupList==>", req.body)
    const { username,password,cgpa,img } = req.body;
    const newSignupUser = new SignupModel({
     username:username,
     password:password,
     cgpa:cgpa,
     img:img
    })
    try {z
        await newSignupUser.save();
        console.log("Saved..")

    } catch (error) {

    }
}
export const getCustomerList = async (req, res) => {
    try {
        const result = await SignupModel.find();
        console.log("getting", result);
        res.json(result)

    } catch (error) {

    }
}
export const getProductList = async (req, res) => {
    try {
        const result = await ProductModel.find();
        console.log("product getting", result);
        res.json(result)

    } catch (error) {

    }
}

