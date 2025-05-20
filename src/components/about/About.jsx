import React from "react";
import {Box} from "@mui/material";
import aboutText from "../../constants/aboutText";
import {DescriptionText, GreetingText, NameText, StyledAvatar} from "./About.styles";

const About = () => {
    return (
        <>
            <Box sx={{ flex: 1 }}>
                <GreetingText>{aboutText.greeting}</GreetingText>
                <NameText>{aboutText.name}</NameText>
                <DescriptionText>{aboutText.description}</DescriptionText>
            </Box>

            <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
                <StyledAvatar src={aboutText.avatarSrc} alt={aboutText.name} />
            </Box>
        </>
    );
};

export default About;
