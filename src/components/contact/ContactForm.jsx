import React from "react";
import {useRef} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {Stack, Typography} from "@mui/material";
import {StyledButtonFull} from "../shared/button/PrimaryButton.styles.js";
import {StyledContactTitle, StyledTextField} from "./contact.styles.js";
import HARD_TEXT from "../../constants/hardText.js";


const ContactForm = ({formRef, handleSubmit, setCaptchaToken, errorMessage}) => {
    const recaptchaRef = useRef(null);

    const handleCaptchaChange = (value) => {
        setCaptchaToken(value);
    };
    return (
        <>
            <StyledContactTitle variant="h4" gutterBottom noWrap>{HARD_TEXT.CONTACT}</StyledContactTitle>
            {errorMessage && (
                <Typography color="error" variant="body2" sx={{mb: 2}}>
                    {errorMessage}
                </Typography>
            )}
            <form ref={formRef} onSubmit={handleSubmit}>
                <Stack spacing={2} sx={{alignItems: 'center'}}>
                    <StyledTextField name="name" label="Name" type="text" fullWidth required variant="outlined"/>
                    <StyledTextField name="email" label="Email" type="email" fullWidth required variant="outlined"/>
                    <StyledTextField name="message" label="Message" type="text" fullWidth required multiline rows={4}
                                     variant="outlined"/>
                    <input type="text" name="bot-field" style={{display: "none"}} autoComplete="off"/>

                    <ReCAPTCHA
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        onChange={handleCaptchaChange}
                        ref={recaptchaRef}
                    />
                </Stack>
                <StyledButtonFull type="submit">{HARD_TEXT.SEND_MESSAGE}</StyledButtonFull>
            </form>
        </>
    );
};

export default ContactForm;
