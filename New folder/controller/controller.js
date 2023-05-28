import asyncHandler from "express-async-handler";
import User from "../models/models.js";
import generateJWTToken from "../utils/generateJWTToken.js";


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log("🚀 ~ file: controller.js:10 ~ authUser ~ req.body", req.body)

    const user = await User.findOne({ email });
    console.log("🚀 ~ file: controller.js:13 ~ authUser ~ user", user)

    if (user && (await user.matchPassword(password))) {
        console.log("🚀 ~ file: controller.js:16 ~ authUser ~ user", user)
        res.json({
            _id: user._id,
            fname: user.fname,
            lname: user.lname,
            email: user.email,
            token: generateJWTToken(user._id),
        });
        console.log("Login Successful");
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});


const registerUser = asyncHandler(async (req, res) => {
    
   const {email, password} = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(404);
        throw new Error("User already exists");
    }else{

        const user =  new User({
            fname: req.body.fname,
            lname: req.body.lname,
            email: email,
            password: password,

        })
        console.log("🚀 ~ file: controller.js:51 ~ registerUser ~ user", user)
        
        
        try {
            await user.save();
            res.json({user, token: generateJWTToken(user._id)});
            console.log("created");
        } catch (error) {
            console.log("Usr not created");
        }
        if (user) {
            res.status(201).json({
                _id: user._id,
                fname: user.name,
                lname: user.name,
                email: user.email,
                
            });
                
        } else {
            res.status(400);
            throw new Error("User not found");
        }

    }


    
});


export { authUser, registerUser };