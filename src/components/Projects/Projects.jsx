import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setProjects(data))
    }, [projects]);
    if (!projects | !projects?.length) return;
    return (
        <div className='px-20 my-10'>
            <h3 className='text-3xl text-semibold text-center uppercase mb-20'>Projects</h3>
            {
                <div className="grid grid-cols-3 gap-3">
                    {
                        projects.map(p => <Project key={p.id} project={p} />)
                    }
                </div>
            }
        </div>
    );
};

export default Projects;