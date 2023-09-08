import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditeButton from '../../../UI/EditeButton';
import { useSelector } from 'react-redux';

const Preview = () => {

    const { fromData } = useSelector(state => state.project);

    const [foldedLines, setFoldedLines] = useState([]);
    const handleLineFold = (lineIndex) => {
        if (foldedLines.includes(lineIndex)) {
            setFoldedLines(foldedLines.filter((index) => index !== lineIndex));
        } else {
            setFoldedLines([...foldedLines, lineIndex]);
        }
    };

    return (
        <div className='font-poppins'>
            <h2 className='text-xl font-medium font-poppins'>Preview</h2>

            <div className="pt-10">

                <div className="flex justify-between">
                    <h5 className="text-gray-800 font-medium">Title</h5>
                    <EditeButton navigationPath="/dashboard/add-project" />
                </div>

                <p className="pt-5 text-gray-700 font-sans">{fromData?.title}</p>
            </div>
            <div className="pt-7">

                <h5 className="text-gray-800 font-medium">Skills and deliverables</h5>
                <div className="pt-2">
                    {
                        fromData?.skills.map((skill, index) => (
                            <button key={index} className="m-1 bg-primary bg-opacity-20 text-gray-800 px-3 py-0.5 rounded-3xl text-sm">{skill}</button>
                        ))
                    }
                </div>
            </div>

            <div className="pt-7">

                <div className="flex justify-between">
                    <h5 className="text-gray-800 font-medium">Project Description</h5>
                    <EditeButton navigationPath="/dashboard/add-project/add-details" />
                </div>

                <div className="">
                    <ul>
                        {fromData?.description.map((line, index) => (
                            <li
                                key={index}
                                className={`${foldedLines.includes(index) ? 'folded' : ''} text-sm pt-5 font-inter text-gray-700`}
                                onClick={() => handleLineFold(index)}
                                style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }} // Enable word wrapping
                            >
                                {line || '\u00A0'}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="pt-7 relative">
                <div className="">
                    <iframe className='w-full h-96' src={fromData?.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="">
                    {
                        fromData?.photos.map((image, index) => (
                            <img key={index} className='pt-5' src={image?.photo} alt="" />
                        ))
                    }
                </div>

                <div className="absolute top-14 right-0">
                    <EditeButton navigationPath="/dashboard/add-project/add-details" />
                </div>
            </div>

            <div className="border-t mt-7 pt-7">
                <p className="pt-5 text-gray-700 font-sans">{fromData?.date}</p>
            </div>
            <div className="pt-7">
                <div className="flex justify-between">
                    <h5 className="text-gray-800 font-medium">Project URL</h5>
                    <EditeButton navigationPath="/dashboard/add-project/add-details" />
                </div>

                <p className="pt-5 text-gray-700 font-sans">{fromData?.projectUrl}</p>
            </div>

            <div className="pt-7">
                <div className="flex justify-between">
                    <h5 className="text-gray-800 font-medium">Template</h5>
                    <EditeButton navigationPath="/dashboard/add-project/add-details" />
                </div>

                <p className="pt-5 text-gray-700 font-sans">{fromData?.templateType}</p>
            </div>

            <div className="flex justify-between gap-5 font-poppins pt-5">
                <Link to="/dashboard/add-project/add-details" >
                    <button className="border-2 border-primary px-8 py-1.5 rounded-full">Back</button>
                </Link>
                <button className="bg-primary text-white px-8 py-1.5 rounded-full">Publish</button>

            </div>
        </div>
    );
};

export default Preview;