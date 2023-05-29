import React from 'react';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { AiTwotoneEdit } from 'react-icons/ai';
import { CgTemplate } from 'react-icons/cg';
import { BiDetail } from 'react-icons/bi';
import { MdDone } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const tabs = [
    {
        id: 1,
        title: 'projects',
        icon: <AiTwotoneEdit />,
        link: 'projects'
    },
    {
        id: 2,
        title: 'add-project',
        icon: <CgTemplate />,
        link: 'add-project'
    },
]

const ProjectsManagSidebar = () => {
    return (
        <div className='flex bg-primary rounded-lg bg-opacity-10 mb-2'>
            {tabs.map((tab) => (
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-primary bg-opacity-20 rounded-lg" : ""
                } to={`${tab.link}`} key={tab.id}>
                    <div key={tab.id} className="flex items-center justify-between gap-5 py-2 px-2 ">
                        <div className="flex items-center gap-5 pl-2">
                            {tab.icon}
                            <h3 className="font-poppins font-medium">{tab.title}</h3>
                        </div>
                    </div>
                </NavLink>
            ))}

        </div>
    );
};

export default ProjectsManagSidebar;