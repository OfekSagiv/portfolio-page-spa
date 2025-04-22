import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Section, CardContainer } from "../common/SectionLayout";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <Section id="projects">
            <CardContainer>
                <ProjectCard
                    title="Project Overview"
                    description="This project is a Book Management RESTful API built with Java and Spring Boot. It includes user authentication, role-based access control, and integration tests. Deployed with Docker on Render."
                    demoText="Try it via Swagger"
                    demoLink="https://app.ofeksagiv.com/swagger-ui/index.html"
                    demoIcon={<OpenInNewIcon />}
                    codeText="View Source on GitHub"
                    codeLink="https://github.com/OfekSagiv/book-management"
                    codeIcon={<GitHubIcon />}
                    imageSrc="/project-photo.png"
                    imageAlt="Project thumbnail"
                />
            </CardContainer>
        </Section>
    );
};

export default Projects;
