import React, { useEffect } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useDeleteProjectMutation } from '../../../../features/api/apiSlice';
import { toast } from 'react-toastify';

const Project = ({ project }) => {
    const {photo, projectUrl, title, video} = project;
    const [deleteProject, { isError, isLoading, isSuccess, error }] = useDeleteProjectMutation();
    // console.log(project)

    const { _id } = project;
    const handleDelete = () => {
        deleteProject(_id);
        console.log(_id)
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('Project Deleted Successfully')
        }
        if (isError) {
            toast.error(error.message);
        }
    }, [isSuccess, isError, error])

    return (
        <div className='relative group md:col-span-1 col-span-2'>
            <div className="">
                <img className="rounded-t-lg border" src={photo} alt="" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <div className="flex justify-between gap-5 ">
                    <AiOutlineEdit className='hidden group-hover:block bg-primary p-2 text-4xl rounded-full text-light cursor-pointer' />
                    {isLoading ? <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div> : <MdDelete onClick={handleDelete} className='hidden group-hover:block bg-primary p-2 text-4xl rounded-full text-light cursor-pointer' />}
                </div>
            </div>
            <div className="bg-primary bg-opacity-30 p-2 rounded-b-lg">
                <h4 className="font-poppins">{project?.title}</h4>
            </div>

        </div>
    );
};

export default Project;