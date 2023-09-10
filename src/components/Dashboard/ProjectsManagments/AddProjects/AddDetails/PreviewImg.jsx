import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, deleteOnePhoto } from '../../../../../features/project/projectSlice';

const PreviewImg = () => {
    const { fromData } = useSelector(state => state.project);

    const dispatch = useDispatch();

    const setPhoto = (data) => {
        const newData = { ...data, selected: true }
        dispatch(addPhoto(newData));
    }

    const handleDeletePhoto = (publicId) => {
        dispatch(deleteOnePhoto(publicId));
      }

    return (
        <div className='grid grid-cols-2 gap-5 mb-5'>
            {fromData?.video &&
                <div className="">
                    <iframe className='w-full h-60' src={fromData?.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            }

            {fromData?.photos.map((item, index) => (
                <div key={index} className="relative inline-block col-span-1 group">
                    <div className="">
                        <img className="w-full h-full object-cover rounded-lg border" src={item.photo} alt="" />
                        {/* <ImageDelete publicId={item.public_id} /> */}
                        <div className='absolute top-0 right-0 p-3 group-hover:block hidden'>
                            <div onClick={() => handleDeletePhoto(item.public_id)} className='bg-primary bg-opacity-10 p-2 rounded-full'>
                                <MdDeleteForever className='text-2xl text-primary' />
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setPhoto(item)} className="flex items-center gap-2 mt-2 pl-2">
                        <input type="checkbox" checked={item.selected} className='rounded-full' />
                        <p className="font-mono">Set as project cover</p>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default PreviewImg;