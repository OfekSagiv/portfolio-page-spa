import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import {PROJECTS} from "../../constants/projects.js";
import {ICONS} from "../shared/icons/icons.jsx";
import ProjectsTabs from "./ProjectsTabs.jsx";
import {ProjectInnerWrapper} from "./Projects.styles.js";

const ProjectDisplay = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const project = PROJECTS[selectedIndex];

    return (
        <ProjectInnerWrapper>
            <ProjectsTabs selectedIndex={selectedIndex} onChange={setSelectedIndex} />

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
        </ProjectInnerWrapper>
    );
};

export default ProjectDisplay;
