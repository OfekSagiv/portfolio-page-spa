import {Box} from "@mui/material";
import HARD_TEXT from "../../constants/hardText.js";
import {ImageWrapper, DescriptionText, GreetingText, NameText, StyledAvatar} from "./About.styles";

const About = () => {
    return (
        <>
            <Box sx={{ flex: 1 }}>
                <GreetingText>{HARD_TEXT.GREETING}</GreetingText>
                <NameText>{HARD_TEXT.NAME}</NameText>
                <DescriptionText>{HARD_TEXT.DESCRIPTION}</DescriptionText>
            </Box>

            <ImageWrapper>
                <StyledAvatar src={HARD_TEXT.AVATAR_SRC} alt={HARD_TEXT.NAME} />
            </ImageWrapper>
        </>
    );
};

export default About;
