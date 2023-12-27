import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


export default function index(props) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            anchorPlacement: "up-center"
        });
    }, []);
    return (
        <div data-aos="fade-up" className='w-[85%] md:w-[30%]'>
            <img src={props.facilityImg} alt="meeting room" className='w-full mb-6 aspect-[3/4] object-cover shadow-lg shadow-slate-300 hover:scale-105 transition-all' />
            <h3 className='text-brown2 font-[700] text-2xl'>{props.facilityName}</h3>
        </div>
    )
}
