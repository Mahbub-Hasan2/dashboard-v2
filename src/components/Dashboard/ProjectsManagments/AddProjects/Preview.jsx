import React from 'react';
import { Link } from 'react-router-dom';

const Preview = () => {
    return (
        <div className='font-poppins'>
            <h2 className='text-xl font-medium font-poppins'>Select template</h2>

            <div className="py-10">
                <p className="">Choose how you want this project displayed to clients. You can always switch templates, even after you publish.</p>


                <p className="pt-5 text-xs text-gray-400 font-poppins">Highlight the work you did on this portfolio project with a scrollable Classic template. You should also choose this option if you are adding files besides images or videos, such as documents and spreadsheets.</p>
            </div>

            <div className="flex gap-5 font-poppins pt-5">
                <Link to="/dashboard/add-details" >
                    <button className="border-2 border-primary px-8 py-1.5 rounded-full">Back</button>
                </Link>
                <Link to="add-details" >
                    <button className="bg-primary text-white px-8 py-1.5 rounded-full">Go to Add Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Preview;