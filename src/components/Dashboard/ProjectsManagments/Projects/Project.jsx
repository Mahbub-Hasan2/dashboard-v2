import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

const Project = () => {
    return (
        <div className='relative group md:col-span-1 col-span-2'>
            <div className="">
                <img className="rounded-t-lg border" src="https://drive.google.com/uc?export=download&id=1H5iGemyHdOjIDjgvcvrscOkYQl7jixMH" alt="" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <div className="flex justify-between gap-5 ">
                    <AiOutlineEdit className='hidden group-hover:block bg-primary p-2 text-4xl rounded-full text-light cursor-pointer' />
                    <MdDelete className='hidden group-hover:block bg-primary p-2 text-4xl rounded-full text-light cursor-pointer' />
                </div>
            </div>
            <div className="bg-primary bg-opacity-30 p-2 rounded-b-lg">
                <h4 className="font-poppins">sahara-frontend</h4>
            </div>

        </div>
    );
};

export default Project;