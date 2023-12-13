import React, { useEffect } from 'react'
import Soto from '../../assets/images/soto1.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

export default function index() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <section id='about' className='w-full px-[1rem] md:px-[8rem] font-poppin bg-brown2  py-8'>
            <div className='flex flex-col md:flex-row items-center'>

                <div className='flex-[1]'>
                    <img data-aos="fade-up" src={Soto} className='w-[80%] m-auto mb-6 md:m-0 rounded-full border-amber-900 border-[2px]' alt="soto" />
                </div>
                <div data-aos="fade-up" className='flex-[1] text-center md:text-left px-[20px] md:pr-[50px] md:pl-0'>
                    <h2 className='text-white font-[600] leading-[55px] text-5xl md:text-4xl'>Tentang Soto Pak Wito</h2>
                    <hr className='mt-6 mb-10 md:mt-4 md:mb-8 mx-auto md:mx-0 w-[90%] md:w-4/5 border-[2px] border-brown3' />
                    <p className=' text-brown4 text-xl sm:text-lg'>
                        Soto Ayam Pak Wito bersemayam dalam joglo yang memikat, menambahkan sentuhan keindahan tradisional pada setiap kunjungan Anda. Suasana hangat dan ramah di dalam joglo kami menciptakan pengalaman makan yang tidak hanya memanjakan lidah tetapi juga menyentuh hati.
                    </p>
                </div>
            </div>
        </section >
    )
}
