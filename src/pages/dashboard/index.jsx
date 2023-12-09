import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import Navbar from '../../components/Navbar'
import About from '../../components/About'
import FavMenu from '../../components/FavMenu'
import Gallery from '../../components/Gallery'
import Facility from '../../components/Facility'
import OurLocation from '../../components/OurLocation'
import Footer from '../../components/Footer'

export default function index() {
    return (
        <>
            <Navbar />
            <DashboardHeader />
            <About />
            <FavMenu />
            <Gallery />
            <Facility />
            <OurLocation />
            <Footer />
        </>
    )
}
