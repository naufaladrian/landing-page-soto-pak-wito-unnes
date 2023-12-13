import React from 'react'

export default function index() {
    return (
        <section id='lokasi' className='w-full px-[1rem] md:px-[8rem] font-poppin flex flex-col gap-8 md:flex-row items-center  md:items-start py-8 pt-12'>
            <div className='flex-1 order-2 md:order-1'>
                <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.782271992543!2d110.38877997499763!3d-7.034857392967062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b5868e9b659%3A0x1c25051daa1f07ac!2sSoto%20Pak%20Wito%20UNNES!5e0!3m2!1sid!2sid!4v1702088567479!5m2!1sid!2sid" allowFullScreen="" loading="lazy" className=' border border-slate-300 aspect-[4/3] w-full' referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='flex-1 order-1 md:order-2 w-4/5'>
                <h2 className='text-brown2 font-[600] md:text-3xl text-4xl w-fit mx-auto md:mx-0 mb-6 border-b-4 py-2 border-brown3 text-center md:text-left'>Lokasi Kami</h2>
                <p className='text-center md:text-left text-2xl'>Jl Sekaran Raya, Sukorejo, Kec. Gn. Pati, Kota Semarang, Jawa Tengah</p>
            </div>
        </section>
    )
}
