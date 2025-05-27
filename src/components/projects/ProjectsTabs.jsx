import React from "react";
import {PROJECTS} from "../../constants/projects";
import {StyledTab, StyledTabs} from "./Projects.styles.js";
import {useTheme, useMediaQuery} from "@mui/material";

const ProjectsTabs = ({selectedIndex, onChange}) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));


    return (

        <StyledTabs variant="scrollable" scrollButtons={isMobile ? "auto" : false} allowScrollButtonsMobile
                    value={selectedIndex} onChange={(_, newIndex) => onChange(newIndex)}>
            {Array.isArray(PROJECTS) ?
                PROJECTS.map((project, index) => (
                    <StyledTab key={index} label={project.title} value={index}/>))
                : null}
        </StyledTabs>
    );
};

export default ProjectsTabs;
