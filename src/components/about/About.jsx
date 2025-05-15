import React from "react";
import {Typography} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import aboutText from "../../constants/aboutText";
import {StyledAvatar, CVButtonWrapper} from "./About.styles";
import Box from "@mui/material/Box";
import PrimaryButton from "../shared/button/PrimaryButton.jsx";

const About = () => {
    return (
        <>
            <Box sx={{ flex: 1 }}>
                <Typography variant="h6">{aboutText.greeting}</Typography>
                <Typography variant="h4" sx={{ pb: 2.5 }}>
                    {aboutText.name}
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 500, lineHeight: 1.6 }}>
                    {aboutText.description}
                </Typography>
                <CVButtonWrapper>
                    <PrimaryButton href={aboutText.cvLink} download endIcon={<DownloadIcon />}>
                        {aboutText.cvLabel}
                    </PrimaryButton>
                </CVButtonWrapper>
            </Box>

            <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
                <StyledAvatar src={aboutText.avatarSrc} alt={aboutText.name} />
            </Box>
        </>
    );
};

export default About;
