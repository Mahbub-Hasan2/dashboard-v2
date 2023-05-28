import React from 'react';
import { Link } from 'react-router-dom';

const AddProject = () => {
    return (
        <div>
            <h2 className='text-xl font-medium font-poppins'>Add portfolio project</h2>

            <div className="py-10">
                <form action="" className="">
                    <div className="">
                        <label className="block font-medium mb-2 font-poppins" htmlFor="">Project Title</label>
                        <input className="rounded-lg md:w-2/3 w-full border-2 border-gray-300 font-poppins" type="text" placeholder='Enter a brief but descriptive title' />
                    </div>

                    <div className="mt-10">
                        <label className="block font-medium mb-2 font-poppins" htmlFor="">Completion Date <span className="text-gray-400 text-xs font-normal">(optional)</span></label>
                        <input className="rounded-lg md:w-2/3 w-full border-2 border-gray-300 font-poppins" type="date" placeholder='Enter a brief but descriptive title' />
                    </div>
                </form>
            </div>

            <div className="flex gap-5 font-poppins pt-5">
                <button className="border-2 border-primary px-8 py-1.5 rounded-full">Cancel</button>
                <Link to="select-template" >
                    <button className="bg-primary text-white px-8 py-1.5 rounded-full">Go to Select Template</button>
                </Link>
            </div>
        </div>
    );
};

export default AddProject;