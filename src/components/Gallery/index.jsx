import React from 'react'

export default function index() {
    return (
        <section id='gallery' className=' font-poppins w-full'>
            <div className='bg-brown3 px-[1rem] md:px-[8rem] py-6 text-center'>
                <h2 className=' text-white font-semibold md:text-5xl text-4xl'>Gallery</h2>
            </div>
            <div className="w-full ">
                <div className=" flex flex-wrap">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div key={index} className="flex w-full sm:w-1/2 md:w-1/3 flex-wrap">
                            <div className="w-full max-w-full overflow-hidden">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full object-cover object-center hover:scale-110 transition-all"
                                    src={`https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(${70 + index}).webp`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
