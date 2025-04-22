import React from "react";
import { Typography, Stack } from "@mui/material";
import { CardHeading } from "../common/SectionLayout";
import PrimaryButton from "../common/PrimaryButton";
import { ImageColumn, ProjectImage, TextColumn } from "./Projects.styles";

const ProjectCard = ({
                         title,
                         description,
                         demoText,
                         demoLink,
                         codeText,
                         codeLink,
                         imageSrc,
                         imageAlt,
                         demoIcon,
                         codeIcon,
                     }) => {
    return (
        <>
            <TextColumn>
                <CardHeading gutterBottom>{title}</CardHeading>

                <Typography variant="h6" sx={{mb : 2}} >
                    {description}
                </Typography>

                <Typography variant="h5" gutterBottom>
                    {demoText}
                </Typography>

                <Stack direction="row" spacing={2} mt={2} mb={4}>
                    <PrimaryButton href={demoLink} target="_blank" endIcon={demoIcon}>
                        {demoText}
                    </PrimaryButton>
                </Stack>

                <Typography variant="h5" gutterBottom>
                    {codeText}
                </Typography>

                <PrimaryButton href={codeLink} target="_blank" endIcon={codeIcon}>
                    {codeText}
                </PrimaryButton>
            </TextColumn>

            <ImageColumn>
                <ProjectImage src={imageSrc} alt={imageAlt} />
            </ImageColumn>
        </>
    );
};

export default ProjectCard;
