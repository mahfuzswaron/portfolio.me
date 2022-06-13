import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const { name, img } = project;
    const navigate = useNavigate();
    return (
        <div class="card w-full bg-white border border-secondary shadow-xl rounded">
            <figure class="px-5 pt-5">
                <img src={img} alt="Shoes" class="rounded border border-primary" />
            </figure>
            <div class="card-body p-5 items-center text-center">
                <h2 class="card-title text-primary text-3xl">{name}</h2>
                <div class="card-actions">
                    <button onClick={() => navigate(`/projects/${project.id}`)} class="btn btn-outline btn-md btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};
export default Project;