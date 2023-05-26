import React from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';

const Header = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 md:mb-20'>
            <div className="relative container mx-auto md:py-20 py-5 md:px-0 px-2">
                <div className="grid grid-cols-7">
                    <div className="md:col-span-3 col-span-7 md:text-start text-center  flex items-center">
                        <div className="w-full md:pb-0 mb-5">
                            <h5 className="xl:text-3xl lg:text-2xl md:text-base sm:text-lg text-xs sm:font-bold font-medium font-inter text-white shadow">Hello, I'm</h5>
                            <h2 className="xl:text-5xl lg:text-3xl md:text-xl text-sm font-bold font-inter text-white shadow">Munir Uddin Mahbub</h2>
                            <p className='xl:text-xl lg:text-base  md:text-sm text-xs sm:font-bold font-normal font-inter text-white shadow'>Full MERN-Stack Web Developer Form Bangladash</p>
                            <Link to="/dashboard">
                                <button className="py-2 px-5 mt-5 bg-white font-bold text-purple-700 rounded-full font-poppins">Dashboard</button>
                            </Link>
                        </div>
                    </div>
                    <div className="md:col-span-4 col-span-7 flex items-center">
                        <div className="overflow-hidden text-gray-700">
                            <div className="w-full">
                                <div className="flex flex-wrap -m-1 md:-m-2">
                                    <div className="flex flex-wrap w-1/2">
                                        <div className="w-1/2 p-1 md:p-2">
                                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                                        </div>
                                        <div className="w-1/2 p-1 md:p-2">
                                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                                        </div>
                                        <div className="w-full p-1 md:p-2">
                                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap w-1/2">
                                        <div className="w-full p-1 md:p-2">
                                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                        </div>
                                        <div className="w-1/2 p-1 md:p-2">
                                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                                        </div>
                                        <div className="w-1/2 p-1 md:p-2">
                                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full md:pt-0 pt-5 md:absolute md:-bottom-14 md:left-0 md:px-28">
                    <Counter />
                </div>
            </div>
        </div>
    );
};

export default Header;