import React from "react";
import {Typography} from "@mui/material";
import PrimaryButton from "../shared/button/PrimaryButton.jsx";
import {PROJECT_BUTTON_LABELS} from "../../constants/projects.js";
import {ProjectCardContainer , ProjectButtonRow} from "./Projects.styles.js";

const ProjectCard = ({title, description, demoText, demoLink, codeText, codeLink, demoIcon, codeIcon,}) => {

    return (
        <ProjectCardContainer>

            <Typography align={"center"} variant="h4" sx={{mb: 3}}>{title}</Typography>
            <Typography variant="body1" sx={{ pl:3, pr:2,mb: 3}}>{description}</Typography>

                <ProjectButtonRow>
                    <Typography variant="h6" sx={{mb: 1, whiteSpace: "nowrap"}}>
                        {demoText}
                    </Typography>

                    <PrimaryButton href={demoLink} target="_blank" endIcon={demoIcon} >
                        {PROJECT_BUTTON_LABELS.LIVE}
                    </PrimaryButton>
                </ProjectButtonRow>

                <ProjectButtonRow>
                    <Typography variant="h6" sx={{mb: 1, whiteSpace: "nowrap"}}>
                        {codeText}
                    </Typography>

                    <PrimaryButton href={codeLink} target="_blank" endIcon={codeIcon}>
                        {PROJECT_BUTTON_LABELS.GITHUB}
                    </PrimaryButton >
                </ProjectButtonRow>

        </ProjectCardContainer>
    );
};

export default ProjectCard;
