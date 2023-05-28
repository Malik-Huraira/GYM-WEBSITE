import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Contact from "../src/pages/Contact";
import Login from "../src/pages/Login";
import Signup from "../src/pages/signup";
import './App.css';
import Product from "../src/pages/Product";
import Membership from "../src/components/membership";
import Admin from "./components/admin/admin/Admin";
import Dashboard from "./components/admin/admin/pages/Dashboard"
import Services from "./pages/Services";
import AddNewProduct from "./components/admin/admin/pages/AddNewProduct";
import Setting from "./components/admin/admin/pages/Setting";
import AllProducts from "./components/admin/admin/pages/AllProducts";
import Blogs from "./components/admin/admin/pages/Blogs";
import EditProduct from "./components/admin/admin/pages/EditProduct";
function App() {
  return (

    <div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Signup" element={<Signup />} />

   {/* ADMIN PAGE */}
        <Route path="/admin" element={<Admin/>}>
        <Route path="allProducts" element={<AllProducts/>}/>
          <Route path="addNewProduct" element={<AddNewProduct/>}/>
          <Route path="addNewBlogPost" element={<Blogs/>} />
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="settings" element={<Setting/>}/>
          <Route path="/admin/allProducts/:id" element={<EditProduct/>}/>

        </Route>
      </Routes>
    </div>
  );
}
export default App;
