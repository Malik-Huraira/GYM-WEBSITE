import "../styles/Nav.css";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div>
            <header>
                <h1 className="logo-nav" style={{fontFamily:"monospace"}}>SOLID GYM</h1>
                <div className="nav-items">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                        <Link to="/product"><li>Product</li></Link>
                        <Link to="/membership"><li>Membership</li></Link>
                        <Link to="/Services"><li>Services</li></Link>
                        <Link to="/Admin"><li>Admin</li></Link>



                    </ul>
                </div>
                <div>
                    <Link to="/Login">
                        <button className="nav-btn ">Login</button>
                    </Link>
                    <span> </span>
                    <span> </span>

                    <Link to="/Signup">
                        <button className="nav-btn">Signup</button>
                    </Link>
                </div>
            </header>
        </div>

    );
}

export default Navbar;