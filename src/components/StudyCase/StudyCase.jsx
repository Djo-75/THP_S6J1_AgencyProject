import React, { useEffect, useState } from 'react';
import projects from '../../projects/projects';
import { useParams } from 'react-router-dom';

const StudyCase = () => {

    const { projectsSlug } = useParams();
    const [currentProject, setCurrentProject] = useState(undefined)

    useEffect(() => {
        const foundProject = projects.find((project) => project.slug === projectsSlug);
        setCurrentProject(foundProject);
    }, [projectsSlug])

    console.log(currentProject)

    return (
        <div>
            {currentProject && ( // conditional rendering pour retourner les titres etc
                <>
                    <h2>{currentProject.titre}</h2>
                    <p>{currentProject.description}</p>
                </>
            )}
        </div>
    );
};

export default StudyCase;