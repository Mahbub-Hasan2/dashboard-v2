import React from 'react';
import { Outlet } from 'react-router-dom';
import DashMainSidebar from '../../components/Dashboard/DashMainSidebar';

const Dashboard = () => {

    return (
        <div>
            {/* <div className="bg-primary shadow text-white p-2 font-semibold font-poppins">
                Munir Uddin Mahbub
            </div> */}
            <div className="flex gap-2">
                <DashMainSidebar/>
                <div className="w-full p-2">
                    <Outlet/>
                </div>
                {/* <ModalForAuth/> */}
            </div>
        </div>
    );
};

export default Dashboard;