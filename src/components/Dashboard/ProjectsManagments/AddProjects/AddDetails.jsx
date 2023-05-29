import React from 'react';
import { Link } from 'react-router-dom';
import AddVideoLink from './AddVideoLink';

const AddDetails = () => {
    return (
        <div className='font-poppins'>
            <h2 className='text-xl font-medium font-poppins'>Add details</h2>

            <div className="py-10">
                <form action="" className="">
                    <div className="">
                        <label htmlFor="title" className="block mb-4 text-gray-700 text-sm font-medium">Project Description</label>
                        <textarea className='border-2 border-gray-300 rounded-xl w-full' name="" id="" cols="30" rows="10" placeholder="Good descriptions include the following elements:
                            1) Your client's goal for the project
                            2) Details about your contribution to the project
                            3) A summary of the project's success
                            " ></textarea>
                    </div>
                    <div className="mt-8 font-inter">
                        <label htmlFor="title" className="block mb-4 text-gray-700 text-sm font-medium">Project Files</label>
                        <div className="grid grid-cols-2 gap-8">

                            <div className="col-span-1 flex items-center justify-center">
                                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-20 border-2 border-primary border-dashed rounded cursor-pointer ">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-5">
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Drag and drop or<span className="font-semibold text-primary"> browse </span> files</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>

                            </div>
                            <div className="col-span-1">
                                <p className="text-sm">Or, embed a video from YouTube or Vimeo.</p>
                                <AddVideoLink />
                            </div>

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