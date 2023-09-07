import React from 'react';
import { useSelector } from 'react-redux';
import ImageDelete from './ImageDelete';

const PreviewImg = () => {
    const {fromData} = useSelector(state => state.project);
    // console.log(fromData);
    return (
        <div className='grid grid-cols-2 gap-5 mb-5'>
            {fromData.photos.map((item, index) => (
                <div key={index} className="relative inline-block col-span-1 group">
                    <img className="w-full h-full object-cover rounded-lg border" src={item.photo} alt="" />
                    <ImageDelete publicId={item.public_id} />
                </div>
            ))}
        </div>
    );
};

export default PreviewImg;