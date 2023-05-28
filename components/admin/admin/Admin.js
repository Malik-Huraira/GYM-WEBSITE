import React, { useState } from 'react';
import "./Admin.css"
import { FaBars } from 'react-icons/fa'
import { RiDashboard2Line } from "react-icons/ri"
import { GoDiffAdded } from "react-icons/go"
import { RiFileListLine, RiSettings4Line, RiLogoutBoxRLine } from 'react-icons/ri'
import { NavLink, Outlet } from 'react-router-dom';


const Admin = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/admin/dashboard",
            name: "Dashboard",
            icon: <RiDashboard2Line />
        },
        {
            path: "/admin/addNewBlogPost",
            name: "Add New Blog",
            icon: <GoDiffAdded />
        },
        {
            path: "/admin/addNewProduct",
            name: "Add New product",
            icon: <GoDiffAdded />
        },
        {
            path: "/admin/allProducts",
            name: "All Products",
            icon: <RiFileListLine />
        },
        {
            path: "/admin/settings",
            name: "Settings",
            icon: <RiSettings4Line />
        }
    ]
    return (
        <div className="sidebar-container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section-sidebar">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">SOLID GYM</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link-sidebar active" >
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main className='sidebar-nextSection'>{children}<Outlet /></main>
        </div>
    );
};

export default Admin;