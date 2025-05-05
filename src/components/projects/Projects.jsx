import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Section, CardContainer, SideColumn } from "../common/SectionLayout";
import ProjectCard from "./ProjectCard";
import { ProjectImageBox, StyledProjectImage } from "./Projects.styles";
import { PROJECTS } from "../../constants/projectsData";


const ICONS = {
    external: <OpenInNewIcon />,
    github: <GitHubIcon />,
};

const Projects = () => {
    const project = PROJECTS[0];

    return (
        <Section id="projects">
            <CardContainer>
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
                <SideColumn >
                    <ProjectImageBox>
                        <StyledProjectImage src={project.image} alt="Project thumbnail" />
                    </ProjectImageBox>
                </SideColumn>
            </CardContainer>
        </Section>
    );
};

export default Projects;
