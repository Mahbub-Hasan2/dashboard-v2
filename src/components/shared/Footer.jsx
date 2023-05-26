import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <div className='bg-gray-50 pt-5'>
            <div className="container mx-auto text-center">
                <div className="flex justify-center items-center">
                <div className="h-14 w-14 rounded-full">
                    <img className="object-contain rounded-full" src="https://avatars.githubusercontent.com/u/67515174?v=4" alt="" />
                </div>
                </div>
                <h2 className='md:text-2xl py-2 text-base font-poppins text-gray-700 font-semibold'>Munir Uddin Mahbub</h2>
                <div className="flex justify-center items-center pb-5">
                    <SocialLinks />
                </div>
            </div>
            <div className="text-center bg-gray-300 py-4">
                <p className="font-semibold text-lg text-gray-700">© 2022 Copyright: Mahbub Hasan</p>
            </div>
        </div>
    );
};

export default Footer;