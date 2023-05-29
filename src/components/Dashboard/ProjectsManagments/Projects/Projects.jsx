import React from 'react';
import Project from './Project';

const Projects = () => {
    return (
        <div>
            <h2 className='text-lg font-semibold font-poppins text-primary'>My All Projects</h2>
        
            <div className="grid grid-cols-4 gap-5 py-10">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    );
};

export default Projects;