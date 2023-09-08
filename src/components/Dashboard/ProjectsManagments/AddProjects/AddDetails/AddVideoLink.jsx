import React from 'react';
import { useForm } from 'react-hook-form';
import { BsCameraVideoFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addVideo } from '../../../../../features/project/projectSlice';

const AddVideoLink = () => {

    const [modal, setModal] = React.useState(true);

    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.video) {
            dispatch(addVideo(data.video));
            setModal(!modal)
        }
    };


    return (
        <div className="col-span-1">
            <p className="text-sm">Or, embed a video from YouTube or Vimeo.</p>

            {/* // <!-- Modal toggle --> */}
            <button onClick={() => setModal(!modal)} className="flex mt-2 gap-3 items-center border-2 border-primary px-5 py-1.5 rounded-full font-semibold text-primary" type="button">
                <BsCameraVideoFill className="" />    Add Video Link
            </button>

            {/* // <!-- Main modal --> */}
            <div className={`fixed flex justify-center top-0 left-0 right-0 z-50 ${modal ? "hidden" : 'block'} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Video Link
                            </h3>
                            <button onClick={() => setModal(!modal)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* <!-- Modal body --> */}
                            <div className="p-6 space-y-6">

                                <div className="">
                                    <label htmlFor="videoLink" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Video Link</label>
                                    <div className="mt-1">
                                        <input
                                            {...register("video", {
                                                pattern: /^(?:https?:\/\/(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)?|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\?[^#\n\r]*)?(?:#(?:.*[?&])*)?)$/
                                            })}
                                            type="text"
                                            name="video"
                                            id="videoLink"
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            placeholder="https://www.youtube.com/embed/gh5RzbKwY5c?si=r2YIR_fAFpuIpJUL"
                                        />

                                        {errors.video && <span className="text-sm text-red-500">Please enter a valid YouTube or Vimeo video URL.</span>}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Modal footer --> */}
                            <div className="flex justify-between items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button data-modal-hide="staticModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Video</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddVideoLink;