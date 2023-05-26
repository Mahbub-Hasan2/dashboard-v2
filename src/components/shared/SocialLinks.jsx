import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaDev, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { BsTwitter, BsInstagram, BsGithub, BsYoutube, BsStackOverflow, BsWhatsapp } from "react-icons/bs";
import skype from "../../assets/images/icons/skype.jpeg";

const SocialLinks = () => {
    return (
        <div className="overflow-x-hidden container-snap">
            <button className="p-2 m-2 bg-[#0864C0] rounded-full shadow-lg">
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='text-xl text-white' /></a>
            </button>
            <button className="p-2 m-2 bg-[#0C86EE] rounded-full shadow-lg">
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF className='text-xl text-white' /></a>
            </button>
            <button className="p-2 m-2 bg-[#1C9AEF] rounded-full shadow-lg">
                <a href="http://" target="_blank" rel="noopener noreferrer"><BsTwitter className='text-xl text-white' /></a>
            </button>
            <button className="p-2 m-2 bg-instagram rounded-full shadow-lg">
                <a href="http://" target="_blank" rel="noopener noreferrer"><BsInstagram className='text-xl text-white' /></a>
            </button>
            <button className="p-2 m-2 bg-white rounded-full shadow-lg">
                <a href="http://" target="_blank" rel="noopener noreferrer"><BsGithub className='text-xl' /></a>
            </button>
            <button className="p-2 m-2 bg-white rounded-full shadow-lg">
                <a href="http://" target="_blank" rel="noopener noreferrer"><BsYoutube className='text-xl text-[#FF0000]' /></a>
            </button>
            <button className="p-2 m-2 bg-white rounded-full shadow-lg">
                <a href="http://" target="_blank" rel="noopener noreferrer"><BsStackOverflow className='text-xl text-[#F27009]' /></a>
            </button>
            <button className="p-2 m-2 bg-white rounded-full shadow-lg">
                <a href="http://" target="_blank" rel="noopener noreferrer"><SiMedium className='text-xl' /></a>
            </button>
            <button className="p-2 m-2 bg-white rounded-full shadow-lg">
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaDev className='text-xl' /></a>
            </button>
            <button className="p-2 m-2 bg-[#32A8E2] rounded-full shadow-lg">
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaTelegramPlane className='text-xl text-white' /></a>
            </button>
            <button className="p-2 m-2 bg-[#5865F2] rounded-full shadow-lg">
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaDiscord className='text-xl text-white' /></a>
            </button>
            <button className="p-2 m-2 bg-[#50CA5D] rounded-full shadow-lg">
                <a href="http://" target="_blank" rel="noopener noreferrer"><BsWhatsapp className='text-xl text-white' /></a>
            </button>
            <button className="p-2 m-2 bg-white rounded-full shadow-lg">
                <a href="http://" target="_blank" rel="noopener noreferrer"><img className='w-[20px] ' src={skype} alt="" /></a>
            </button>
        </div>
    );
};

export default SocialLinks;