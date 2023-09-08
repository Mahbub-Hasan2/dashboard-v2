import React from 'react';
import { MdModeEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const EditeButton = ({navigationPath, ...attributes}) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(navigationPath)
    }

    return (
        <button onClick={handleEdit} {...attributes} className="border-2 rounded-full p-2 bg-white hover:bg-gray-50">
            <MdModeEdit className="text-primary text-2xl" />
        </button>
    );
};

export default EditeButton;