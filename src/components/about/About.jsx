import React from "react";
import {Box} from "@mui/material";
import HARD_TEXT from "../../constants/hardText.js";
import {DescriptionText, GreetingText, NameText, StyledAvatar} from "./About.styles";

const About = () => {
    return (
        <>
            <Box sx={{ flex: 1 }}>
                <GreetingText>{HARD_TEXT.GREETING}</GreetingText>
                <NameText>{HARD_TEXT.NAME}</NameText>
                <DescriptionText>{HARD_TEXT.DESCRIPTION}</DescriptionText>
            </Box>

            <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
                <StyledAvatar src={HARD_TEXT.AVATAR_SRC} alt={HARD_TEXT.NAME} />
            </Box>
        </>
    );
};

export default About;
