import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const Layouts = () => {

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
            <ToastContainer />
        </div>
    );
};

export default Layouts;