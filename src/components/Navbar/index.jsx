import { useState } from "react";

export default function index(props) {
    //Change navbar color when scroll
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);

    const [isNavExpanded, setIsNavExpanded] = useState(true);

    return (
        <div
            className={`fixed px-[1rem] md:px-[8rem] top-0 w-full z-50 transition duration-700 ease-in-out ${color ? "bg-brown2 shadow-lg h-16 pt-[12px]" : " h-16 pt-[12px]  bg-transparent"} ${props.fix ? "lg:bg-white !h-16 !pt-[12px]" : ""
                }`}
        >
            <header className={` w-full m-auto font-crimson flex flex-wrap items-center justify-between `}>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                    <a href="\" className="text-white font-extrabold text-xl md:text-3xl">
                        Soto Pak Wito
                    </a>
                    <button
                        id="hamburger"
                        className="relative w-10 h-10 lg:hidden overflow-hidden"
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                        }}
                    >
                        <div
                            role="hidden"
                            id="line"
                            className={` ${isNavExpanded ? "" : "-rotate-45 translate-y-2"
                                } inset-0 w-6 h-0.5 m-auto rounded-full bg-white transition duration-300`}
                        ></div>
                        <div
                            role="hidden"
                            id="line2"
                            className={` ${isNavExpanded ? "visible translate-x-0" : "translate-x-10"
                                } inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-white transition duration-300`}
                        ></div>
                        <div
                            role="hidden"
                            id="line3"
                            className={`${isNavExpanded ? "" : "rotate-45 -translate-y-2"
                                } inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-white transition duration-300`}
                        ></div>
                    </button>
                </div>
                <div
                    id="navlinks"
                    className={`relative transition duration-300  bg-amber-950 lg:bg-transparent ${isNavExpanded
                        ? "hidden -translate-y-[120%] lg:-translate-y-0"
                        : "visible translate-y-5 rounded-lg p-5"
                        }  w-full lg:visible lg:bg-transparent items-center  transition duration-300 lg:block lg:w-auto`}
                >
                    <nav className=" w-full  md:py-0  tracking-wide transition lg:w-auto  lg:block">
                        <ul className="text-[18px] flex flex-col  lg:flex-row items-center justify-around gap-[40px] ">
                            <li>
                                <a
                                    href="/"
                                    className="group transition duration-300 text-xl text-white "
                                >
                                    Home{" "}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[white] text-white"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="group transition duration-300 text-xl text-white"
                                >
                                    Tentang{" "}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[white] text-white"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#menu"
                                    className="group transition duration-300 text-xl text-white"
                                >
                                    Menu{" "}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[white] text-white"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#gallery"
                                    className="group transition duration-300 text-xl text-white"
                                >
                                    Gallery{" "}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[white] text-white"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#fasilitas"
                                    className="group transition duration-300 text-xl     text-white"
                                >
                                    Fasilitas{" "}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[white] text-white"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#lokasi"
                                    className="group transition duration-300 text-xl  text-white"
                                >
                                    Lokasi{" "}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[white] text-white"></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}
