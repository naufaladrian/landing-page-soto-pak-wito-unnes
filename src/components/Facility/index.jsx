import React from 'react'
import MeetingRoom from '../../assets/images/meeting-room.jpg'
import Wifi from '../../assets/images/wifi.jpg'
import DalamResto from '../../assets/images/dalam-resto.jpg'
import Card from '../CardFacility'

export default function index() {
    const facilities = [
        {
            facilityImg: MeetingRoom,
            facilityName: 'Meeting Room'
        },
        {
            facilityImg: Wifi,
            facilityName: 'Free WiFi'
        },
        {
            facilityImg: DalamResto,
            facilityName: 'Tempat Nyaman'
        },
    ]
    return (
        <section id='fasilitas' className='w-full px-[1rem] md:px-[8rem] py-8 pt-16 font-poppins bg-white text-center'>
            <h2 className='text-brown2 font-[600]  md:text-5xl text-4xl w-fit mx-auto mb-6 border-b-4 py-3 px-2 border-brown3'>Fasilitas</h2>
            <div className=' flex mx-auto items-center justify-center md:justify-between gap-y-8 flex-wrap flex-row '>
                {facilities.map((facility, index) => (
                    <Card facilityImg={facility.facilityImg} facilityName={facility.facilityName} />
                ))}

            </div>
        </section>
    )
}
