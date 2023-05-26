import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalForAuth } from '../../../features/auth/authSlice';
import GetAuthorized from './GetAuthorized';

const ModalForAuth = () => {
    const { modal } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    
    const open = () => {
        dispatch(modalForAuth(false));
    };


    return (
        <div className=''>
            <>
                {modal === true ? (
                    <>
                        <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                            <div className="relative w-full my-6 mx-auto max-w-sm">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                    <div className="relative md:p-6 p-1 flex-auto">
                                        <button
                                            title='Close Modal'
                                            className="absolute -top-0 -right-14 bg-white pb-3 px-2 rounded-full border-2 ml-auto text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={open}
                                        >
                                            <span className="  text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                        <div className="">
                                            <GetAuthorized />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </>
        </div >
    );
};

export default ModalForAuth;