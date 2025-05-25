import React from "react";
import ProjectCard from "./ProjectCard";
import {StyledProjectImage} from "./Projects.styles";
import {PROJECTS} from "../../constants/projects.js";
import {ICONS} from "../shared/icons/icons.jsx";
import {ImageWrapper} from "../about/About.styles.js";

const Projects = () => {
    const project = PROJECTS[0];

    return (
       <>
                < ProjectCard
                    title={project.title}
                    description={project.description}
                    demoText={project.demoText}
                    demoLink={project.demoLink}
                    demoIcon={ICONS[project.demoIcon]}
                    codeText={project.codeText}
                    codeLink={project.codeLink}
                    codeIcon={ICONS[project.codeIcon]}
                />
            <ImageWrapper>
            <StyledProjectImage src={project.image} alt="Project thumbnail" />
            </ImageWrapper>
        </>
    );
};

export default Projects;
