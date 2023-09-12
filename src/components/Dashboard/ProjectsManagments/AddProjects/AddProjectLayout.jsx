import React from 'react';
import { Outlet } from 'react-router-dom';
import AddProjectSidebar from './AddProjectSidebar';
import { BiRefresh } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { resetProjectData } from '../../../../features/project/projectSlice';

const AddProjectLayout = () => {
    const dispatch = useDispatch();

    const handleResetProjectData = () => {
        dispatch(resetProjectData());
    };
    return (
        <div className='py-10'>
            <div className="container mx-auto md:px-28">
                <div className="grid grid-cols-10 gap-3">
                    <div className="col-span-3">
                        <AddProjectSidebar />
                    </div>
                    <div className="col-span-7 border rounded-xl p-8 relative">
                        <Outlet />
                        <div className="absolute top-10 -right-3">
                            <button onClick={handleResetProjectData}>
                                <BiRefresh className='text-2xl hover:text-primary' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProjectLayout;