import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddVideoLink from './AddVideoLink';
import TextEditor from '../TextEditor';
import ImageUpload from './ImageUpload';
import PreviewImg from './PreviewImg';
import { useDispatch, useSelector } from 'react-redux';
import { addProjectUrl, removeSkill, setSkill } from '../../../../../features/project/projectSlice';
import { IoClose } from 'react-icons/io5';
import { useForm } from 'react-hook-form';

const AddDetails = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.projectUrl) {
            dispatch(addProjectUrl(data));
            navigate("preview");
        }
    };

    const { fromData } = useSelector(state => state.project);

    const addSkill = (data) => {
        dispatch(setSkill(data));
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addSkill(e.target.value);
            e.target.value = "";
        }
    }

    const handleRemoveSkill = (e) => {
        dispatch(removeSkill(e));
    }

    const inputRef = useRef(null);

    const handleDivClick = () => {
        // Set focus on the input field when the div is clicked
        inputRef.current.focus();
    };

    return (
        <div className='font-poppins'>
            <h2 className='text-xl font-medium font-poppins'>Add details</h2>

            <div className="pt-10">
                <div className="">
                    <label htmlFor="title" className="block mb-4 text-gray-700 text-sm font-medium">Project Description</label>

                    <TextEditor />
                </div>
                <div className="mt-8 font-inter">
                    <label htmlFor="title" className="block mb-4 text-gray-700 text-sm font-medium">Project Files</label>

                    <PreviewImg />
                    <div className="grid grid-cols-2 gap-8">
                        <ImageUpload />
                        <AddVideoLink />
                    </div>
                </div>

                <div className="pt-10">
                    <label htmlFor="title" className="block mb-4 text-gray-700 text-sm font-medium">Skills and deliverables <span className="text-xs font-inter text-gray-400">(optional)</span></label>

                    <div onClick={handleDivClick} className=" flex-wrap border-2 border-gray-300 rounded-lg w-full cursor-text">
                        <div className="w-full max-w-screen-md mx-auto px-2 py-1">
                            <div className="flex flex-wrap items-center">
                                {/* Content from Another Component */}
                                <div className="space-x-2">
                                    {
                                        fromData?.skills.map((skill, index) => (
                                            <button key={index} className='m-1 bg-primary text-white px-2 py-0 rounded-3xl text-sm'><span className=' flex items-center'><span>{skill}</span>  <span className='reletive' onClick={() => handleRemoveSkill(skill)}><IoClose className='text-white pl-2 text-2xl' /></span></span></button>
                                        ))
                                    }
                                </div>

                                {/* Input */}
                                <input
                                    type="text"
                                    ref={inputRef} // Assign the ref to the input element
                                    onKeyPress={handleKeyPress}
                                    className="flex-grow w-full sm:w-auto px-2 py-2 border-none focus:border-none mb-2 md:mb-0"
                                    placeholder={fromData?.skills.length === 0 ? "Add skills and deliverables" : ""}
                                />
                            </div>
                        </div>
                    </div>


                </div>



                <div className="pt-10">
                    <h3 className="text-gray-500">Suggested skills</h3>
                    <div className="">
                        <button onClick={() => addSkill("Html")} className="m-1 bg-primary bg-opacity-20 text-gray-800 px-3 py-0.5 rounded-3xl text-sm">Html +</button>
                        <button onClick={() => addSkill("Css")} className="m-1 bg-primary bg-opacity-20 text-gray-800 px-3 py-0.5 rounded-3xl text-sm">Css +</button>
                        <button onClick={() => addSkill("JavaScript")} className="m-1 bg-primary bg-opacity-20 text-gray-800 px-3 py-0.5 rounded-3xl text-sm">Javascript +</button>
                        <button onClick={() => addSkill("React")} className="m-1 bg-primary bg-opacity-20 text-gray-800 px-3 py-0.5 rounded-3xl text-sm">React +</button>
                        <button onClick={() => addSkill("Node Js")} className="m-1 bg-primary bg-opacity-20 text-gray-800 px-3 py-0.5 rounded-3xl text-sm">Node +</button>
                        <button onClick={() => addSkill("Express")} className="m-1 bg-primary bg-opacity-20 text-gray-800 px-3 py-0.5 rounded-3xl text-sm">Express +</button>
                        <button onClick={() => addSkill("MongoDB")} className="m-1 bg-primary bg-opacity-20 text-gray-800 px-3 py-0.5 rounded-3xl text-sm">MongoDB +</button>

                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="pb-10">
                    <div className="pt-10">
                        <label htmlFor="title" className="block mb-4 text-gray-700 text-sm font-medium">Project URL <span className="text-xs font-inter text-gray-400">(optional)</span></label>
                        <input  {...register("projectUrl")} defaultValue="null" className="border-2 border-gray-300 rounded-lg w-full placeholder:text-sm placeholder:font-inter py-2" type="text" />
                    </div>

                    <p className="pt-10 text-sm text-gray-500 font-inter">
                        Make sure you have approval from your clients to display the work you've done for them publicly.
                    </p>

                </div>

                <div className="flex gap-5 font-poppins pt-5">
                    <Link to="/dashboard/add-project/select-template" >
                        <button className="border-2 border-primary px-8 py-1.5 rounded-full">Back</button>
                    </Link>
                    <button type="submit" className="bg-primary text-white px-8 py-1.5 rounded-full">Go to Preview</button>
                </div>
            </form>
        </div>
    );
};

export default AddDetails;