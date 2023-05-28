import React from 'react'
import '../styles/HeroSection.css'
import video from "../assets/Exercise.mp4"
import { Link } from 'react-router-dom';
function HeroSection() {
    return (
        <>

            <div className='hero-container'>
                <video className='video-class' autoPlay src={video} loop muted />
                <div className='inner-container'>
                    <h1>ADVENTURE AWAITS</h1>
                    <p style={{ color: "white" }} >What are you waiting for?</p>
                    <div className='hero-btns'>
                        <Link to="/Signup"><button className='btn-hero'>
                            GET STARTED
                        </button></Link>
                        <Link to="/Signup" ><button className='btn-hero'> WATCH TRAILER <i className='far fa-play-circle' /></button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;