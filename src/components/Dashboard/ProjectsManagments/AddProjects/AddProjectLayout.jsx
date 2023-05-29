import React from 'react';
import { Outlet } from 'react-router-dom';
import AddProjectSidebar from './AddProjectSidebar';

const AddProjectLayout = () => {
    return (
        <div className='py-10'>
            <div className="container mx-auto md:px-28">
                <div className="grid grid-cols-10 gap-3">
                    <div className="col-span-3">
                        <AddProjectSidebar />
                    </div>
                    <div className="col-span-7 border rounded-xl p-8">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProjectLayout;