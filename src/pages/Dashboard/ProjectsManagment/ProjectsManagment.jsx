import React from 'react';
import Sidebar from '../../../components/Dashboard/ProjectsManagments/Sidebar';
import { Outlet } from 'react-router-dom';

const ProjectsManagment = () => {
    return (
        <div className='py-10'>
            <div className="container mx-auto md:px-40">
                <div className="grid grid-cols-10 gap-3">
                    <div className="col-span-3">
                        <Sidebar />
                    </div>
                    <div className="col-span-7 border rounded-xl p-8">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsManagment;