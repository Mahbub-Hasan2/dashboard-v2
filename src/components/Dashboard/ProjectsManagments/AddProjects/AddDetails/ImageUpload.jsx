import React, { useState } from 'react';
import cloudinary from '../../../../../configs/cloudinary.init';
import { useDispatch } from 'react-redux';
import { setPhotos } from '../../../../../features/project/projectSlice';



const ImageUpload = () => {
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    console.log(file)
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'kr01uply');

    try {
      console.log(formData); // Will show an empty object in the console
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/image/upload`, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        // Handle the uploaded image data
        dispatch(setPhotos({photo: data.secure_url, public_id: data.public_id}));
        console.log(data);

      } else {
        // Handle the error
        console.log('Image upload failed.');
      }
    } catch (error) {
      // Handle the error
      console.log('Error occurred during image upload.', error);
    }
  };

  return (
    <div className="col-span-1 flex items-center justify-center">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-20 border-2 border-primary border-dashed rounded cursor-pointer ">
        <div className="flex flex-col items-center justify-center pt-5 pb-5">
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Drag and drop or<span className="font-semibold text-primary"> browse </span> files</p>
        </div>
        <input id="dropzone-file" type="file" onChange={handleImageUpload} className="hidden" />
      </label>
    </div>
  );
};

export default ImageUpload;
