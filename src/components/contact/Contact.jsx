import React from "react";
import {Box} from "@mui/material";
import {useContactForm} from "../../hooks/useContactForm";
import ContactForm from "./ContactForm.jsx";
import ContactDetails from "./ContactDetails.jsx";
import ResponsiveDivider from "../shared/divider/ResponsiveDivider.jsx";

const Contact = () => {
    const {formRef, handleSubmit, setCaptchaToken, errorMessage} = useContactForm();

    return (
        <>
            <Box sx={{flex: 1}}>
                <ContactForm formRef={formRef} handleSubmit={handleSubmit} setCaptchaToken={setCaptchaToken}
                             errorMessage={errorMessage}/>
            </Box>
            <ResponsiveDivider/>
            <Box sx={{flex: 1}}>
                <ContactDetails/>
            </Box>
        </>
    );
};

export default Contact;
