import React from "react";
import {Typography, Stack, Box} from "@mui/material";
import PrimaryButton from "../shared/button/PrimaryButton.jsx";
import {PROJECT_BUTTON_LABELS} from "../../constants/projects.js";
import {ProjectCardContainer} from "./Projects.styles.js";

const ProjectCard = ({title, description, demoText, demoLink, codeText, codeLink, demoIcon, codeIcon,}) => {

    return (
        <ProjectCardContainer>
            <Typography align={"center"} variant="h4">{title}</Typography>
            <Typography variant="body1">{description}</Typography>

            <Stack direction="column" spacing={4}>

                <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <Typography variant="h6" sx={{mb: 1, whiteSpace: "nowrap"}}>
                        {demoText}
                    </Typography>

                    <PrimaryButton href={demoLink} target="_blank" endIcon={demoIcon} sx={{mr: "20px"}}>
                        {PROJECT_BUTTON_LABELS.SWAGGER}
                    </PrimaryButton>
                </Box>

                <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <Typography variant="h6" sx={{mb: 1, whiteSpace: "nowrap"}}>
                        {codeText}
                    </Typography>

                    <PrimaryButton href={codeLink} target="_blank" endIcon={codeIcon} sx={{mr: "20px"}}>
                        {PROJECT_BUTTON_LABELS.GITHUB}
                    </PrimaryButton >
                </Box>

            </Stack>
        </ProjectCardContainer>
    );
};

export default ProjectCard;
