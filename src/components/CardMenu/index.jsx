import React, { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function index(props) {
    const [onHover, setOnHover] = useState(false)
    const handleMouseIn = () => {
        setOnHover(true)
    }
    const handleMouseOut = () => {
        setOnHover(false)
    }
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            anchorPlacement: "up-center"
        });
    }, []);
    return (
        <div data-aos="fade-up" className=' relative w-[85%] sm:w-[50%] md:w-[30%] mt-8 shadow-lg hover:scale-105 transition-all duration-300' onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
            <img src={props.img} alt="soto" />
            {/* overlay */}
            <div className={`absolute top-0 w-full h-full bg-black bg-opacity-50 text-white text-center md:text-left p-6 md:p-4 flex items-center md:items-end transition-all duration-300 ${onHover ? 'opacity-100' : 'opacity-0'}`}>
                <div className='w-full'>
                    <h3 className=' font-semibold text-2xl md:text-3xl mb-1'>Soto Ayam Special</h3>
                    <p className=' font-medium text-lg'>Rp 1.000.000</p>
                </div>
            </div>
        </div>
    )
}
