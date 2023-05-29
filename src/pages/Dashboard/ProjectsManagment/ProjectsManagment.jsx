import React from 'react';
import { Outlet } from 'react-router-dom';
import ProjectsManagSidebar from '../../../components/Dashboard/ProjectsManagments/ProjectsManagSidebar';

const ProjectsManagment = () => {
    return (
        <div className='pb-10'>
            <div className="">
                {/* <div className="grid grid-cols-12 gap-3"> */}
                    <div className="col-span-2">
                        <ProjectsManagSidebar />
                    </div>
                    <div className="col-span-10 border rounded-xl p-8">
                        <Outlet />
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default ProjectsManagment;