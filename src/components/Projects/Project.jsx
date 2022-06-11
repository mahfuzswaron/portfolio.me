import React from 'react';


const Project = ({ id }) => {

    return (
        <a href="https://laptop-stock-new.web.app/" target='_blank' id={id} class="mockup-window border bg-base-300 ">
            <div >
                {/* <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#${id - 1}`} class="btn btn-circle">❮</a>
                <a href={`#${id + 1}`} class="btn btn-circle">❯</a>
            </div> */}

                <div class="flex justify-center  bg-base-200">
                    <div class="card rounded w-full">
                        <figure><img src="https://i.ibb.co/gP4X1m0/Laptop-Stock.png" alt="project" /></figure>
                        <div class="card-body hidden hover:block">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Project;