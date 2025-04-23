import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Section, CardContainer, SideColumn } from "../common/SectionLayout";
import ProjectCard from "./ProjectCard";
import { ProjectImageBox, StyledProjectImage } from "./Projects.styles";

const Projects = () => {
    return (
        <Section id="projects">
            <CardContainer>
                <ProjectCard
                    title="Project Overview"
                    description="This project is a Book Management RESTful API built with Java and Spring Boot. It includes user authentication, role-based access control, and integration tests. Deployed with Docker on Render."
                    demoText="Try it via Swagger UI"
                    demoLink="https://app.ofeksagiv.com/swagger-ui/index.html"
                    demoIcon={<OpenInNewIcon />}
                    codeText="View the source code on GitHub"
                    codeLink="https://github.com/OfekSagiv/book-management"
                    codeIcon={<GitHubIcon />}
                />
                <SideColumn>
                    <ProjectImageBox>
                        <StyledProjectImage src="/project-photo.png" alt="Project thumbnail" />
                    </ProjectImageBox>
                </SideColumn>
            </CardContainer>
        </Section>
    );
};

export default Projects;
