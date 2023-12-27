import React from 'react'
import CardMenu from '../CardMenu'
import Soto from '../../assets/images/soto1.jpg'
import Uwuh from '../../assets/images/uwuh.jpg'
import Sate from '../../assets/images/sate2.jpg'

export default function index() {
    const menus = [
        {
            menuImg: Uwuh,
            menuName: 'Wdang Uwuh',
            menuPrice: 'Rp 13.000'
        },
        {
            menuImg: Soto,
            menuName: 'Soto Jumbo',
            menuPrice: 'Rp 18.000'
        },
        {
            menuImg: Sate,
            menuName: 'Aneka Sate',
            menuPrice: 'Rp 9.000'
        },
    ]

    return (
        <section id='menu' className='w-full px-[1rem] md:px-[8rem] py-16 font-poppins bg-white text-center'>
            <h2 className='text-brown2 font-[700] leading-[55px] md:text-5xl text-4xl border-b-4 w-fit mx-auto py-3 border-brown3'>Menu Terlaris</h2>
            <div className=' flex mx-auto items-center justify-center gap-x-4 flex-wrap flex-row mb-12'>
                {menus.map((item, index) => (
                    <CardMenu img={item.menuImg} menu={item.menuName} harga={item.menuPrice} />
                ))}
            </div>
            <a href="https://heyzine.com/flip-book/4d5e291245.html" className=' bg-brown2 text-brown4 font-crimson text-3xl rounded-md px-6 py-4' target="_blank">Daftar Menu</a>
        </section>
    )
}
