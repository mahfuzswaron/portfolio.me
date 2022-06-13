import React from 'react';

const ContactMe = () => {
    return (
        <div className='mb-10 mt-44 px-20 flex'>
            <div className='w-1/2 px-5'>
                <img src="https://i.ibb.co/LQ62C5k/contact.png" alt="contact me" />
            </div>
            <div className='w-1/2 px-5'>
                <h3 className="text-4xl text-center text-primary font-bold mb-5">
                    Contact Me
                </h3>
                <form className=' mx-auto grid grid-cols-1 gap-3' action="">
                    <input type="text" name="name" id="name" placeholder='Your Name' className='input input-primary bg-white text-xl py-3' />
                    <input type="email" name="email" id="email" placeholder='Your Email' className='input input-primary bg-white text-xl py-3' />
                    <textarea type="text" name="message" id="message" placeholder='Your Message' className='input input-primary bg-white text-xl py-3' />
                    <button type="submit" className="btn btn-primary text-white w-full">
                        SEND
                    </button>
                </form>
            </div>

        </div>
    );
};

export default ContactMe;