import React from "react";
import {Typography} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import aboutText from "../../constants/aboutText";
import {
    Section,
    CardContainer, SideColumn,
} from "../common/SectionLayout.js";
import {
    StyledAvatar,
    CVButtonWrapper,
} from "./About.styles";
import Box from "@mui/material/Box";
import PrimaryButton from "../common/PrimaryButton.jsx";

const About = () => {
    return (
        <Section id="about">
            <CardContainer>
                <Box>
                    <Typography variant="h6">
                        {aboutText.greeting}
                    </Typography>
                    <Typography variant="h4" sx={{pb: 2.5}}>
                        {aboutText.name}
                    </Typography>
                    <Typography variant="body1" sx={{maxWidth: 500, lineHeight: 1.6}}>
                        {aboutText.description}
                    </Typography>

                    <CVButtonWrapper>
                        <PrimaryButton href="/cv.pdf" download endIcon={<DownloadIcon/>}>
                            Download my CV
                        </PrimaryButton>
                    </CVButtonWrapper>
                </Box>
                <SideColumn>
                    <StyledAvatar src="/photo.png" alt="Ofek Sagiv"/>
                </SideColumn>
            </CardContainer>
        </Section>
    );
};

export default About;
