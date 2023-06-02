import React from 'react';
import { Link } from 'react-router-dom';
import AddVideoLink from './AddVideoLink';
import TextEditor from '../TextEditor';
import ImageUpload from './ImageUpload';
import PreviewImg from './PreviewImg';

const AddDetails = () => {
    return (
        <div className='font-poppins'>
            <h2 className='text-xl font-medium font-poppins'>Add details</h2>

            <div className="py-10">
                <form action="" className="">
                    <div className="">
                        <label htmlFor="title" className="block mb-4 text-gray-700 text-sm font-medium">Project Description</label>

                        <TextEditor />
                    </div>
                    <div className="mt-8 font-inter">
                        <label htmlFor="title" className="block mb-4 text-gray-700 text-sm font-medium">Project Files</label>
                        
                        <PreviewImg/>
                        <div className="grid grid-cols-2 gap-8">
                            <ImageUpload />
                            <AddVideoLink />
                        </div>
                    </div>

                    <div className="pt-10">
                        <label htmlFor="title" className="block mb-4 text-gray-700 text-sm font-medium">Skills and deliverables <span className="text-xs font-inter text-gray-400">(optional)</span></label>
                        <input className="border-2 border-gray-300 rounded-lg w-full placeholder:text-sm placeholder:font-inter py-2" type="text" placeholder='Add a skill or deliverable' />
                    </div>

                    <div className="pt-10">
                        <h3 className="text-gray-500">Suggested skills</h3>
                        <div className="">
                            <button className="m-1 bg-primary bg-opacity-20 text-gray-800 px-3 py-0.5 rounded-3xl text-sm">Html +</button>
                            <button className="m-1 bg-primary bg-opacity-20 text-gray-800 px-3 py-0.5 rounded-3xl text-sm">Css +</button>
                            <button className="m-1 bg-primary bg-opacity-20 text-gray-800 px-3 py-0.5 rounded-3xl text-sm">Javascript +</button>
                            <button className="m-1 bg-primary bg-opacity-20 text-gray-800 px-3 py-0.5 rounded-3xl text-sm">React +</button>
                            <button className="m-1 bg-primary bg-opacity-20 text-gray-800 px-3 py-0.5 rounded-3xl text-sm">Node +</button>
                            <button className="m-1 bg-primary bg-opacity-20 text-gray-800 px-3 py-0.5 rounded-3xl text-sm">Express +</button>
                            <button className="m-1 bg-primary bg-opacity-20 text-gray-800 px-3 py-0.5 rounded-3xl text-sm">MongoDB +</button>

                        </div>
                    </div>

                    <div className="pt-10">
                        <label htmlFor="title" className="block mb-4 text-gray-700 text-sm font-medium">Project URL <span className="text-xs font-inter text-gray-400">(optional)</span></label>
                        <input className="border-2 border-gray-300 rounded-lg w-full placeholder:text-sm placeholder:font-inter py-2" type="text" />
                    </div>
                </form>

                <p className="pt-10 text-sm text-gray-500 font-inter">
                    Make sure you have approval from your clients to display the work you've done for them publicly.
                </p>

            </div>

            <div className="flex gap-5 font-poppins pt-5">
                <Link to="/dashboard/select-template" >
                    <button className="border-2 border-primary px-8 py-1.5 rounded-full">Back</button>
                </Link>
                <Link to="add-details" >
                    <button className="bg-primary text-white px-8 py-1.5 rounded-full">Go to Preview</button>
                </Link>
            </div>
        </div>
    );
};

export default AddDetails;