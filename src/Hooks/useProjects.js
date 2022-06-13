import React, { useEffect, useState } from 'react';

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('../../data.json').then(res => res.json()).then(data => setProjects(data))
    }, [projects]);
    // if(project)

    return [projects]
};

export default useProjects;