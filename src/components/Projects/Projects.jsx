import React from 'react';
import Project from './Project';
const laptopStock = {
    name: 'Laptop Stock',
    img: 'https://i.ibb.co/gP4X1m0/Laptop-Stock.png',
    id: 'project#1',
    liveLink: 'https://laptop-stock-new.web.app/',
    technologies: ['React', 'React-Router', 'Tailwind', 'css', 'Firebase', 'Heroku', 'MOngoDB'],
    features: [
        'See all inventories together',
        'Manage Inventories (Add, Remove, Sale)',
        'Total Price Calculator',
        'Analytics of Sale',
        'Blogs including some core concepts',
        'Protected routes for logged in user only'
    ]

};
const todo = {
    name: 'Todo Manager',
    img: 'https://i.ibb.co/VwBtWZL/WHAT-TO-DO.png',
    id: 'project#2',
    liveLink: 'https://react-to-do-app-41e4a.web.app/',
    technologies: ['React', 'Tailwind', 'DaisyUI', 'Firebase', 'Heroku', 'MongoDB'],
    features: [
        'See all Tasks',
        'Manage Tasks (Add, Remove, Strikethrow)',
    ]
};
const digitalWatch = {
    name: 'JavaScript Watch',
    img: 'https://i.ibb.co/sKsPzqs/digital-watch.png',
    id: 'project#3',
    liveLink: 'https://digital-watch-ms.netlify.app/',
    technologies: ['HTML, CSS, JavaScript'],
    features: [
        'See time'
    ]
};
const projects = [laptopStock, todo, digitalWatch];
const Projects = () => {
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