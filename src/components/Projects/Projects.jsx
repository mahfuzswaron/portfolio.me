import React from 'react';
import Project from './Project';

const Projects = () => {
    return (
        <div className='px-20 my-10'>
            <h3 className='text-3xl text-semibold text-center uppercase mb-20'>Projects</h3>
            {

                <div className="grid grid-cols-3 gap-3">
                    <Project id='1' />
                    <Project id='2' />
                    <Project id='3' />
                </div>


            }
        </div>
    );
};

export default Projects;