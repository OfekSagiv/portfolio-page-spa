import React from "react";
import {Stack} from "@mui/material";
import {StyledContactLink, StyledContactText} from "../shared/elements/elements.styles.js";

const ContactRow = ({icon, text, href}) => {
    return (
        <Stack direction="row" spacing={1.5} alignItems="center">
            {icon}
            {href ? (
                <StyledContactLink href={href} target="_blank" underline="none">
                    {text}
                </StyledContactLink>) : (
                <StyledContactText>{text}</StyledContactText>
            )}
        </Stack >
    );
};

export default ContactRow;
