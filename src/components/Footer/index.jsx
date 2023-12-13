import React from 'react'

export default function index() {
    return (
        <footer className='w-full font-poppin'>
            <div className='bg-brown1 text-white px-[1rem] md:px-[8rem] py-6 flex flex-col gap-6 md:flex-row text-center md:text-left'>
                <div className='flex-1'>
                    <h3 className='font-semibold text-xl mb-3'>Alamat</h3>
                    <p>Jl Sekaran Raya, Sukorejo, Kec. Gn. Pati, Kota Semarang, Jawa Tengah</p>
                </div>
                <div className='flex-1'>
                    <h3 className='font-semibold text-xl mb-3'>Jam Buka</h3>
                    <p>Setiap Hari<br />Pukul 07.00 - 20.00</p>
                </div>
                <div className='flex-1'>
                    <h3 className='font-semibold text-xl mb-3'>Kontak</h3>
                    <p>1111-2222-3333</p>
                    <p>@sotopakwitounnes</p>
                </div>
            </div>
            <div className=' bg-[#1C150D] text-white text-center py-2 text-sm'>Copyright ©2023 Soto Dargo Pak Wito</div>
        </footer>
    )
}
