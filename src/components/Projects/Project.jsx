import React from 'react';


const Project = ({ project }) => {
    const { name, img } = project;
    return (
        <div class="card w-full bg-white border border-secondary shadow-xl rounded">
            <figure class="px-5 pt-5">
                <img src={img} alt="Shoes" class="rounded border border-primary" />
            </figure>
            <div class="card-body p-5 items-center text-center">
                <h2 class="card-title text-primary text-3xl">{name}</h2>
                <div class="card-actions">
                    <button class="btn btn-outline btn-md btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};
// https://i.ibb.co/gP4X1m0/Laptop-Stock.png
export default Project;