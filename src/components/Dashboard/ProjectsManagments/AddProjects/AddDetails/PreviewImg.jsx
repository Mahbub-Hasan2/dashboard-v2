import React from 'react';
import { useSelector } from 'react-redux';
import ImageDelete from './ImageDelete';

const PreviewImg = () => {
    const { fromData } = useSelector(state => state.project);
    // console.log(fromData);
    return (
        <div className='grid grid-cols-2 gap-5 mb-5'>
            <div className="">
                <iframe className='w-full h-60' src={fromData?.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
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