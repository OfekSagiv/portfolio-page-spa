import React from "react";
import ProjectCard from "./ProjectCard";
import {StyledProjectImage} from "./Projects.styles";
import {PROJECTS} from "../../constants/projectsData";
import {Icons} from "../shared/icons/icons.jsx";

const Projects = () => {
    const project = PROJECTS[0];

    return (
       <>
                <ProjectCard
                    title={project.title}
                    description={project.description}
                    demoText={project.demoText}
                    demoLink={project.demoLink}
                    demoIcon={Icons[project.demoIcon]}
                    codeText={project.codeText}
                    codeLink={project.codeLink}
                    codeIcon={Icons[project.codeIcon]}
                />

            <StyledProjectImage src={project.image} alt="Project thumbnail" />
        </>
    );
};

export default Projects;
