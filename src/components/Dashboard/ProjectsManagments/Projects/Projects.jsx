import React from 'react';
import Project from './Project';
import { useGetProjectsQuery } from '../../../../features/api/apiSlice';

const Projects = () => {
    const { data, isError, isLoading } = useGetProjectsQuery({ page: 0 })

    let content = null;
    if (isLoading) {
        content = <h1>order Loding ...</h1>
    }
    if (!isLoading && isError) {
        content = <h2 className=''>There was an error!!</h2>
    }
    if (!isLoading && !isError && data?.length === 0) {
        content = <h1 className=''>No Project found !</h1>
    }
    if (!isLoading && !isError && data?.length > 0) {
        // console.log(data)
        content = (
            <div className="grid grid-cols-4 gap-5 py-10">
                {data.map((project, i) => <Project key={i} project={project} />)}
            </div>
        )
    }

    console.log(data)
    return (
        <div>
            <h2 className='text-lg font-semibold font-poppins text-primary'>My All Projects</h2>

            <div>
                {content}
            </div>
        </div>
    );
};

export default Projects;