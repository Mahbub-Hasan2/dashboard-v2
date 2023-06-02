import React from 'react';
import axios from 'axios';
import cloudinary from '../../../../../configs/cloudinary.init';
import { MdDeleteForever } from 'react-icons/md';

const ImageDelete = ({ publicId }) => {
  const { cloud_name, api_key, api_secret } = cloudinary.config();

  console.log(cloud_name, api_key, api_secret);

  const deleteImage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`https://api.cloudinary.com/v1_1/${cloud_name}/image/destroy/${publicId}`, {
        headers: {
          'Authorization': `Bearer ${api_secret}`
        }
      });
      console.log(response.data);
      // Handle the response or display a success message
    } catch (error) {
      console.log("Something went wrong, please try again later.", error);
    }
  };

  return (
    <div className='absolute top-0 right-0 p-3 group-hover:block hidden'>
      <div onClick={deleteImage} className='bg-primary bg-opacity-10 p-2 rounded-full'>
        <MdDeleteForever className='text-2xl text-primary' />
      </div>
    </div>
  );
};

export default ImageDelete;
