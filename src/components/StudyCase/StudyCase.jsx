import React, { useEffect, useState } from 'react';
import projects from '../../projects/projects';
import { useParams, useNavigate } from 'react-router-dom';

const StudyCase = () => {

    const { projectsSlug } = useParams();
    const [currentProject, setCurrentProject] = useState(undefined)

    useEffect(() => {
        const foundProject = projects.find((project) => project.slug === projectsSlug);
        setCurrentProject(foundProject);
    }, [projectsSlug])

    console.log(currentProject)

    let navigate = useNavigate();

    return (

        <div className='card'>
            <button onClick={() => navigate(-1)}>Back</button>
            {currentProject && ( // conditional rendering pour retourner les titres etc
                <>
                    <h2>{currentProject.titre}</h2>
                    <p>Nom du client : {currentProject.client}</p>
                    <p>Descriptif du projet : {currentProject.description}</p>
                </>
            )}
        </div>
    );
};

export default StudyCase;