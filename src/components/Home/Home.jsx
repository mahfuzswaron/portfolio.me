import React from 'react';
import photo from '../../../images/profile-pic.jpg';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe';
const Home = () => {
    return (
        <div>
            <h1 className='text-8xl font-thin text-center mt-10 tracking-normal hover:tracking-wider hover:text-primary'>MAHFUZ SWARON</h1>
            <h2 className='text-2xl font-bold text-center mt-2 uppercase'>A Web Developer's web</h2>
            <img class="mask mask-circle w-40 h-40 mx-auto mt-14 mb-10 hover:w-44 hover:h-44" src={photo} alt='mahfuz swaron photo' />
            <p className='text-left mx-auto w-1/3 text-xl whitespace-pre-line pb-10'>
                {
                    `From childhood, a strong curisity about web technology attracts me. Always my mind asked me what is going on behind the scene.

                    Finaly, learned web development. And don't live in the earth, live in web.
                    `
                }
            </p>
            <Projects />
            <ContactMe />
        </div>
    );
};

export default Home;