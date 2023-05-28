import Navbar from "../components/Navbar";
import "../styles/Signup.css";
import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { Signup, getData } from '../../../../Service/api';
import { sendSignupData } from "../Service/api";

function Signup() {
    const { id } = useParams();
    

    useEffect(() => {
        getInitialSignupDetails()
    }, [])
   
    const [signupData, setSignupData] = useState([{
        username: "",
        password: "",
        cgpa:"",
        img: ""
    }])

    const getInitialSignupDetails = async () => {
        const result = await getData(id);
        setSignupData(result.data);
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
        console.log("Signup ", signupData)
    }


    const signNows = async (e) => {
        e.preventDefault();
        console.log("add now", signupData);
        await sendSignupData(signupData,id);
    }
    return (
        <>
            <Navbar />
            <div class="main-wrap">
                <div class="form-wrap">
                    <h1>SIGN <span>UP</span></h1>
                    <h6>Welcome to Solid Gym</h6>
                    <form class="signform">
                        <input type="text" onChange={(e) => handleChange(e)} placeholder="Username" name="username" value={signupData.username} />
                        <input type="password" onChange={(e) => handleChange(e)} placeholder="Password" name="password" value={signupData.password} />
                        <input type="text" onChange={(e) => handleChange(e)} placeholder="CGPA" name="cgpa" /> 
                        <button type="submit" class="form-btn" onClick={(e) => signNows(e)}>Signup</button>
                    </form>

                </div>
            </div>
        </>
    );

}

export default Signup;