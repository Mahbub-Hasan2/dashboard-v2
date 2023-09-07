import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const ImageDelete = ({ publicId }) => {
  const deleteImage = () => {
    const cloudName = 'your_cloud_name';
    const apiKey = 'your_api_key';

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/delete_by_token`;

    const script = document.createElement('script');
    script.src = `${url}?public_id=${publicId}&api_key=${apiKey}&callback=deleteCallback`;
    document.body.appendChild(script);

    // Define the callback function to handle the response
    window.deleteCallback = (response) => {
      console.log(response);
      // Handle the response or display a success message
      // Remove the callback function
      delete window.deleteCallback;
      // Remove the script tag
      document.body.removeChild(script);
    };
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

