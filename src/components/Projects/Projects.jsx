import React from 'react';
import Project from './Project';
const laptopStock = {
    name: 'Laptop Stock',
    img: 'https://i.ibb.co/gP4X1m0/Laptop-Stock.png',
    id: 'project#1',
    liveLink: '',

};
const todo = {
    name: 'Todo Manager',
    img: 'https://i.ibb.co/VwBtWZL/WHAT-TO-DO.png',
    id: 'project#2'
};
const digitalWatch = {
    name: 'JavaScript Watch',
    img: 'https://i.ibb.co/sKsPzqs/digital-watch.png',
    id: 'project#3'
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