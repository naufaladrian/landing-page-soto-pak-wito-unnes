import React from 'react'
import DepanResto from '../../assets/images/depan-resto.jpg'
import DalamResto from '../../assets/images/dalam-resto.jpg'
import DalamResto2 from '../../assets/images/dalam-resto2.jpg'
import KasirResto from '../../assets/images/kasir-resto.jpg'
import '../../assets/styles/animation.css'

export default function index() {
    return (
        <section id='home' className='px-[1rem] md:px-[8rem] w-full min-h-screen relative flex items-center justify-center  '  >
            <img src={DepanResto} className='faded-image w-full absolute h-screen md:max-h-screen -z-[2] object-cover' />
            <img src={DalamResto} className='faded-image w-full absolute h-screen md:max-h-screen -z-[2] object-cover' />
            <img src={DalamResto2} className='faded-image w-full absolute h-screen md:max-h-screen -z-[2] object-cover' />
            <img src={KasirResto} className='faded-image w-full absolute h-screen md:max-h-screen -z-[2] object-cover' />
            <div className=' absolute w-full min-h-screen bg-black -z-[1] opacity-70'></div>
            <div className=' text-white text-center font-crimson border-[6px] border-white border-double py-24 px-3 md:p-16'>
                <h1 className=' font-[600] text-6xl md:text-8xl mb-4  md:leading-[6rem]'>Soto Ayam Dargo <br />Pak Wito</h1>
                <p className='text-lg md:text-2xl'>"Nikmati Kelezatan Soto dalam Keindahan Joglo Tradisional."</p>
            </div>
        </ section>
    )
}
