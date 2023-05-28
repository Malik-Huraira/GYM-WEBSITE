
import { useRef } from "react";
import Navbar from "../components/Navbar";
import "../styles/Login.css";
function Login() {

const name=useRef("");
const password=useRef("");

const submitForm=(e)=>{
    e.preventDefault();
    console.log(name.current.value);
    console.log(password.current.value);
}

    return (
        <>
        <Navbar/>
        <div className="main">
            <div className="login-container">
                <form className="form" onSubmit={submitForm} >
                    <h1>LOG <span>IN</span></h1>
                    <input ref={name} type="username" placeholder="Username" />
                    <input ref={password} type="password" placeholder="Password" />
                    <button className="form-btn" type="submit">LogIn</button>
                </form>
            </div >
        </div>
        </>
    );
}

export default Login;