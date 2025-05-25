import React from "react";
import {Stack, TextField} from "@mui/material";
import {StyledButtonFull} from "../shared/button/PrimaryButton.styles.js";
import {StyledContactTitle, StyledTextField} from "./contact.styles.js";


const ContactForm = ({formRef, handleSubmit}) => {
    return (
        <>
            <StyledContactTitle variant="h4" gutterBottom noWrap>Contact Me</StyledContactTitle>
            <form ref={formRef} onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <StyledTextField name="name" label="Name" type="text" fullWidth required variant="outlined"/>
                    <StyledTextField name="email" label="Email" type="email" fullWidth required variant="outlined"/>
                    <StyledTextField name="message" label="Message" type="text" fullWidth required multiline rows={4}
                                     variant="outlined"/>
                </Stack>
                <StyledButtonFull type="submit">Send Message</StyledButtonFull>
            </form>
        </>
    );
};

export default ContactForm;
