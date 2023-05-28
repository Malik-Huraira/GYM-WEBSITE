import React, { useContext, useState } from 'react'
import data from '../data/membership.js'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/membership.css'
import Navbar from './Navbar.js';



export default function Membership() {

    const Navigate=useNavigate();
    const [membership] = useState(data)

    const membershipData = membership.map((data, i) => {
        return <li className='member-main' key={i}>
            <h3>{data.type}</h3>
            <p>{data.description}</p>
            <p className="price">{data.price} Euro/Month</p>
            <p>{data.period}</p>
            <p>{data.plus}</p>
            <button className='btn-m btn-membership'>
                <Link to="/signup">get it now</Link>
            </button>
        </li>
    })
    return (
    <>
        <Navbar/>
        <div className="membership-container">
            <h2>SELECT YOUR MEMBERSHIP PLAN</h2>
            <ul className="membership-boxes">
                {membershipData}
            </ul>
            <div className="trial">
                <h4>Try trial 1 day free training</h4>
                <button className='btn-m btn-trial' onClick={() => Navigate("/Signup")}>
                    try it now
                </button>
            </div>
        </div>
        </>
    )
}