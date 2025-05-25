import React from "react";
import {Stack, TextField, Typography} from "@mui/material";
import {StyledButtonFull} from "../shared/button/PrimaryButton.styles.js";
import {StyledContactTitle} from "./contact.styles.js";


const ContactForm = ({formRef, handleSubmit}) => {
    return (
        <>
            <StyledContactTitle variant="h4" gutterBottom noWrap>Contact Me</StyledContactTitle>
            <form ref={formRef} onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField name="name" label="Name" type="text" fullWidth required />
                    <TextField name="email" label="Email" type="email" fullWidth required />
                    <TextField name="message" label="Message" type="text" fullWidth required multiline rows={4}/>
                </Stack>
                <StyledButtonFull type="submit">Send Message</StyledButtonFull>
            </form>
        </>
    );
};

export default ContactForm;
