import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../../Hooks/useProjects';

const ProjectDetails = () => {
    const { id } = useParams();
    const [projects] = useProjects();

    if (!projects | !projects?.length) {
        return
    }

    const project = projects.find(p => p.id === id);
    const { name, img, technologies, features, liveLink } = project;

    return (
        <div className='flex px-5'>
            <figure className='w-1/2 p-5 flex items-center'>
                <img className='p-10 shadow-lg block mx-auto ' src={img} alt={name} />
            </figure>

            <div className='p-10 grid grid-cols-1 gap-3'>
                <h1 className='text-4xl text-primary font-bold'>{name}</h1>

                <div>
                    <p className='text-2xl hover:text-primary font-semibold mb-3'>Main Features:</p>
                    <ul className='space-y-2'>
                        {
                            features.map((t, i) => <li className='hover:text-primary' key={i}> # {t}</li>)
                        }
                    </ul>
                </div>

                <div>
                    <p className='text-2xl hover:text-primary font-semibold mb-3'>Technologies used:</p>
                    <ul className='flex flex-wrap space-x-3'>
                        {
                            technologies.map((t, i) => <li className='hover:text-primary'
                                key={i}> {t}</li>)
                        }
                    </ul>
                </div>

                <button >
                    <a className="btn btn-primary text-white w-full " target={'_blank'} href={liveLink}>
                        Visit Site
                    </a>
                </button>

            </div>
        </div>
    );
};

export default ProjectDetails;