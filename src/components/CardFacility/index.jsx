import React from 'react'

export default function index(props) {
    return (
        <div className='w-[85%] md:w-[30%]'>
            <img src={props.facilityImg} alt="meeting room" className='w-full mb-6 aspect-[3/4] object-cover shadow-lg shadow-slate-300 hover:scale-105 transition-all' />
            <h3 className='text-brown2 font-[700] text-2xl'>{props.facilityName}</h3>
        </div>
    )
}
