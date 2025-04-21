import React from "react";
import {Typography, Button} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import aboutText from "../../constants/aboutText";
import {
    Section,
    CardContainer,
} from "../layout/SectionLayout.js";
import {
    StyledAvatar,
    CVButtonWrapper,
} from "./About.styles";
import Box from "@mui/material/Box";

const About = () => {
    return (
        <Section id="about">
            <CardContainer>
                <Box>
                    <Typography variant="h6" sx={{color: "#374151", mb: 1}}>
                        {aboutText.greeting}
                    </Typography>
                    <Typography variant="h4" sx={{fontWeight: "bold", color: "#111827", pb: 2.5}}>
                        {aboutText.name}
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{color: "#4b5563", maxWidth: 500, lineHeight: 1.6}}
                    >
                        {aboutText.description}
                    </Typography>

                    <CVButtonWrapper>
                        <Button
                            variant="contained"
                            color="primary"
                            href="/cv.pdf"
                            download
                            endIcon={<DownloadIcon/>}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: "1rem",
                            }}
                        >
                            Download my CV
                        </Button>
                    </CVButtonWrapper>
                </Box>

                <StyledAvatar src="/photo.png" alt="Ofek Sagiv"/>
            </CardContainer>
        </Section>
    );
};

export default About;
