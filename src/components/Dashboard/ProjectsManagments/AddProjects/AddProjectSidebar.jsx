import React from 'react';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { AiTwotoneEdit } from 'react-icons/ai';
import { CgTemplate } from 'react-icons/cg';
import { BiDetail } from 'react-icons/bi';
import { MdDone } from 'react-icons/md';
import { Link } from 'react-router-dom';

const tabs = [
    {
        id: 1,
        title: 'Add Project',
        icon: <AiTwotoneEdit />,
        link: ''
    },
    {
        id: 2,
        title: 'select template',
        icon: <CgTemplate />,
        link: 'select-template'
    },
    {
        id: 3,
        title: 'Add details',
        icon: <BiDetail />,
        link: 'add-details'
    },
    {
        id: 4,
        title: 'Preview',
        icon: <MdDone />,
        link: 'preview'
    }
]

const AddProjectSidebar = () => {
    return (
        <div>
            {tabs.map((tab) => (
                <Link to={`${tab.link}`} key={tab.id}>
                    <div key={tab.id} className="flex items-center justify-between gap-5 py-2 px-2 border-l-4 border-primary">
                        <div className="flex items-center gap-5 pl-2">
                            {tab.icon}
                            <h3 className="font-poppins font-medium">{tab.title}</h3>
                        </div>
                        <div className="">
                            <IoCheckmarkDoneCircle className='text-primary text-xl' />
                        </div>
                    </div>
                </Link>
            ))}

        </div>
    );
};

export default AddProjectSidebar;