import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useLoginAdminMutation } from '../../../features/api/apiSlice';
import { setAdminInfo } from '../../../features/auth/authSlice';

const GetAuthorized = () => {
    const [loginAdmin, { data: admin, isError, isSuccess }] = useLoginAdminMutation(); // redux || add new product :) ->

    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    const onSubmit = data => {
        loginAdmin(data);
    };


    useEffect(() => {
        if (isSuccess && admin) {
            dispatch(setAdminInfo(admin))
            sessionStorage.setItem("accessToken", JSON.stringify(admin.accessToken));
            toast.success("Successfully login ✅✅", {
                position: "bottom-right",
            });
        }
        else if (isError) {
            toast.error("Failed to login", {
                position: "bottom-right",
            });
        }
    }, [dispatch, isSuccess, admin, isError]);

    return (
        <>
            <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Get Authorized</h5>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input {...register("email", { required: true })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                            {errors.email && <span className='text-red-500 font-poppins'>This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input {...register("password", { required: true })} type="text" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            {errors.password && <span className='text-red-500 font-poppins'>This field is required</span>}
                        </div>

                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default GetAuthorized;