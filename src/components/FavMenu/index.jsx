import React from 'react'
import CardMenu from '../CardMenu'
import Soto from '../../assets/images/soto1.jpg'

export default function index() {

    return (
        <section id='menu' className='w-full px-[1rem] md:px-[8rem] py-8 font-poppins bg-white text-center'>
            <h2 className='text-brown2 font-[700] leading-[55px] md:text-5xl text-4xl border-b-4 w-fit mx-auto py-3 border-brown3'>Menu Terlaris</h2>
            <div className=' flex mx-auto items-center justify-center gap-x-4 flex-wrap flex-row  '>
                {[1, 2, 3].map((item, index) => (
                    <CardMenu img={Soto} />
                ))}

            </div>
        </section>
    )
}
