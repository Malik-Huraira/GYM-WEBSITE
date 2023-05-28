import Navbar from "../components/Navbar";
import "../styles/Signup.css";
import React, { useState } from 'react'
import { sendSignupData } from "../Service/api";

function Signup() {
    const [signupData, setSignupData] = useState([{
        username: "",
        password: "",
        cgpa: "",
        img:""
    }])
    const handleChange = (e) => {
        console.log(e.target.value)
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
        console.log("product ", signupData)
    }


    const signNows = async (e) => {
        e.preventDefault();
        console.log("add now", signupData);
        await sendSignupData(signupData);
    }
    return (
        <>
            <Navbar />
            <div class="main-wrap">
                <div class="form-wrap">
                    <h1>SIGN <span>UP</span></h1>
                    <h6>Welcome to Solid Gym</h6>
                    <form class="signform">
                        <input type="text" onChange={(e) => handleChange(e)} placeholder="Username" name="username" />
                        <input type="password" onChange={(e) => handleChange(e)} placeholder="Password" name="password" />
                        <input type="text" onChange={(e) => handleChange(e)} placeholder="CGPA" name="cgpa" />
                        <input type={"file"} onChange={(e) => handleChange(e)} placeholder="Image" name="img" />
                        <button type="submit" class="form-btn" onClick={(e) => signNows(e)}>Signup</button>
                    </form>

                </div>
            </div>
        </>
    );

}

export default Signup;