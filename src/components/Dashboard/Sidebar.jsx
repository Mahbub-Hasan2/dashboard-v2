import React, { useState } from 'react';
import { BiChevronRight, BiChevronLeft, BiSortAZ } from "react-icons/bi";
import { BsGrid3X3GapFill, BsImages } from "react-icons/bs";
import { ImBlogger } from "react-icons/im";
import { GiSkills } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { SiWebauthn } from "react-icons/si";

const dashPagesData = [
    { name: "Service", link: "services-managment", icon: (<BiSortAZ className='text-2xl text-white font-bold' />) },
    { name: "Projects", link: "", icon: (<BsGrid3X3GapFill className='text-2xl text-white font-bold' />) },
    { name: "Blogs", link: "blogs-managment", icon: (<ImBlogger className='text-2xl text-white font-bold' />) },
    { name: "Skills", link: "skills-managment", icon: (<GiSkills className='text-2xl text-white font-bold' />) },
    { name: "Gallery", link: "gallery-managment", icon: (<BsImages className='text-2xl text-white font-bold' />) },
    { name: "Authorized", link: "authorized", icon: (<SiWebauthn className='text-2xl text-white font-bold' />) },
]

const Sidebar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <div className={`relative hover:transition-all ease-in-out duration-75 ${openSidebar === true ? "w-1/6" : "w-24"} h-screen p-2`}>
            <div className="h-full bg-primary text-white p-2 rounded-md">
                <h3 className='text-xl border-b pb-2 mb-2 font-poppins font-semibold text-center' >{"{-‘`-}"}</h3>

                {dashPagesData.map((item, i) => (
                    <Link key={i} to={item?.link}>
                        <div className="group relative grid grid-cols-3 cursor-pointer py-1.5 hover:bg-[#ffffff16] rounded">
                            <div className={`${openSidebar === true ? "col-span-1" : "col-span-3"} flex justify-center items-center`}>
                                {item?.icon}
                            </div>
                            <div className={`${openSidebar === true ? "col-span-2" : "hidden"}`}>
                                <p className='text-base font-poppins'>{item?.name}</p>
                            </div>
                            <div className="hidden group-hover:block absolute top-1.5 left-12 border bg-white text-primary text-center rounded-md font-poppins text-sm px-2 py-0.5">{item?.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="absolute top-16 -right-1">
                <button onClick={() => setOpenSidebar(!openSidebar)} className='text-primary bg-white p-1  rounded-full shadow'>

                    {openSidebar ?
                        <BiChevronLeft className='text-xl font-bold' />
                        :
                        <BiChevronRight className='text-xl font-bold' />
                    }
                </button>
            </div>
        </div>
    );
};

export default Sidebar;