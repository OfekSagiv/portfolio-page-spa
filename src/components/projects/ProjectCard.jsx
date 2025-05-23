import React from "react";
import { Typography, Stack } from "@mui/material";
import { CardHeading } from "../common/SectionLayout";
import PrimaryButton from "../common/PrimaryButton";
import { PROJECT_BUTTON_LABELS } from "../../constants/projectLabels";

const ProjectCard = ({
                         title,
                         description,
                         demoText,
                         demoLink,
                         codeText,
                         codeLink,
                         demoIcon,
                         codeIcon,
                     }) => {
    return (
        <div>
            <CardHeading gutterBottom>{title}</CardHeading>
            <Typography variant="body1" sx={{ maxWidth: 500, lineHeight: 1.6, mb: 3 }}>
                {description}
            </Typography>

            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 4 }}
            >
                <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
                    {demoText}
                </Typography>

                <PrimaryButton
                    href={demoLink}
                    target="_blank"
                    endIcon={demoIcon}
                >
                    {PROJECT_BUTTON_LABELS.demo}
                </PrimaryButton>
            </Stack>

            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
                    {codeText}
                </Typography>

                <PrimaryButton
                    href={codeLink}
                    target="_blank"
                    endIcon={codeIcon}
                >
                    {PROJECT_BUTTON_LABELS.code}
                </PrimaryButton>
            </Stack>
        </div>
    );
};

export default ProjectCard;
