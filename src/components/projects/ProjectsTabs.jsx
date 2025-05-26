import React from "react";
import { PROJECTS } from "../../constants/projects";
import {StyledTab, StyledTabs} from "./Projects.styles.js";

const ProjectsTabs = ({ selectedIndex, onChange }) => {
    const tabItems = PROJECTS.map((project, index) => (
        <StyledTab key={index} label={project.title} value={index} />
    ));

    return (

        <StyledTabs variant="scrollable" value={selectedIndex} onChange={(_, newIndex) => onChange(newIndex)}>
            {Array.isArray(tabItems) ? tabItems : []}
        </StyledTabs>
    );
};

export default ProjectsTabs;
