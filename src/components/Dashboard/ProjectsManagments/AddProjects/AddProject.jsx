import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addProject } from '../../../../features/project/projectSlice';

const AddProject = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if(data.title){
            dispatch(addProject(data));    
            navigate("select-template");
        }
    };
    return (
        <div>
            <h2 className='text-xl font-medium font-poppins'>Add portfolio project</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="py-10">

                    <div className="">
                        <label className="block font-medium mb-2 font-poppins" htmlFor="">Project Title</label>
                        <input {...register("title")} className="rounded-lg md:w-2/3 w-full border-2 border-gray-300 font-poppins" type="text" placeholder='Enter a brief but descriptive title' />
                        {errors.title && <span>This field is required</span>}
                    </div>

                    <div className="mt-10">
                        <label className="block font-medium mb-2 font-poppins" htmlFor="">Completion Date <span className="text-gray-400 text-xs font-normal">(optional)</span></label>
                        <input {...register("date")} className="rounded-lg md:w-2/3 w-full border-2 border-gray-300 font-poppins" type="date" placeholder='Enter a brief but descriptive title' />
                    </div>

                </div>

                <div className="flex gap-5 font-poppins pt-5">
                    <button className="border-2 border-primary px-8 py-1.5 rounded-full">Cancel</button>
                    <button type="submit" className="bg-primary text-white px-8 py-1.5 rounded-full">Go to Select Template</button>
                </div>
            </form>
        </div>
    );
};

export default AddProject;