import React from 'react'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <>
            <Navbar/>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
} 