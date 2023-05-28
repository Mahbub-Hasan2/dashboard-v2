import React from 'react';
import { Link } from 'react-router-dom';
import templte1 from '../../../assets/images/templates/gallery-view.svg';
import templte2 from '../../../assets/images/templates/case-study-view.svg';
import templte3 from '../../../assets/images/templates/classic-view.svg';

const SelectTemplate = () => {
    return (
        <div className='font-poppins'>
            <h2 className='text-xl font-medium font-poppins'>Select template</h2>

            <div className="py-10">
                <p className="">Choose how you want this project displayed to clients. You can always switch templates, even after you publish.</p>

                <div className="">
                    <div className="grid grid-cols-3 gap-5 mt-10">
                        <div className="md:col-span-1 col-span-3 border-2 rounded-lg">
                            <div className="border-gray-300 rounded-md flex justify-between gap-2 px-2 py-2">
                                <div className="pt-2 pl-2 pb-3">
                                    <img className="" src={templte1} alt="" />
                                    <h3 className="font-medium text-xl pt-2">Gallery</h3>
                                    <p className="text-gray-500 text-xs">Display images or videos, one at a time</p>
                                </div>
                                <div className="up-radio">
                                    <input type="radio" id="radio1" name="radio" value="radio1" />
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-1 col-span-3 border-2 rounded-lg">
                            <div className="border-gray-300 rounded-md flex justify-between gap-2 px-2 py-2">
                                <div className="pt-2 pl-2 pb-3">
                                    <img className="" src={templte2} alt="" />
                                    <h3 className="font-medium text-xl pt-2">Case Study</h3>
                                    <p className="text-gray-500 text-xs">Highlight the project problem and your solution</p>
                                </div>
                                <div className="up-radio">
                                    <input type="radio" id="radio1" name="radio" value="radio1" />
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-1 col-span-3 border-2 rounded-lg">
                            <div className="border-gray-300 rounded-md flex justify-between gap-2 px-2 py-2">
                                <div className="pt-2 pl-2 pb-3">
                                    <img className="" src={templte3} alt="" />
                                    <h3 className="font-medium text-xl pt-2">Classic</h3>
                                    <p className="text-gray-500 text-xs">Allow clients to scroll through your work</p>
                                </div>
                                <div className="up-radio">
                                    <input type="radio" id="radio1" name="radio" value="radio1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="pt-5 text-xs text-gray-400 font-poppins">Highlight the work you did on this portfolio project with a scrollable Classic template. You should also choose this option if you are adding files besides images or videos, such as documents and spreadsheets.</p>
            </div>

            <div className="flex gap-5 font-poppins pt-5">
                <Link to="/dashboard" >
                    <button className="border-2 border-primary px-8 py-1.5 rounded-full">Back</button>
                </Link>
                <Link to="add-details" >
                    <button className="bg-primary text-white px-8 py-1.5 rounded-full">Go to Add Details</button>
                </Link>
            </div>
        </div>
    );
};

export default SelectTemplate;