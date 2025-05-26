import React from "react";
import ProjectCard from "./ProjectCard";
import {StyledProjectImage} from "./Projects.styles";
import {PROJECTS} from "../../constants/projects.js";
import {ICONS} from "../shared/icons/icons.jsx";
import {ImageWrapper} from "../about/About.styles.js";
import Divider from "@mui/material/Divider";

const ProjectDisplay = () => {

    return (
        <>
            {PROJECTS.map((project, index) => (
                <React.Fragment key={index}>
                    <ProjectCard
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
                        <StyledProjectImage src={project.image} alt={`Project ${index + 1} thumbnail`} />
                    </ImageWrapper>
                    {index < PROJECTS.length - 1 && <Divider/>}
                </React.Fragment>
            ))}
        </>
    );
};

export default ProjectDisplay;
