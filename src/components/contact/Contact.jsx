import React from "react";
import {Box} from "@mui/material";
import {useContactForm} from "../../hooks/useContactForm";
import ContactForm from "./ContactForm.jsx";
import ContactDetails from "./ContactDetails.jsx";
import ResponsiveDivider from "../shared/divider/ResponsiveDivider.jsx";

const Contact = () => {
    const {formRef, handleSubmit} = useContactForm();

    return (
        <>
            <Box sx={{flex: 1}}>
                <ContactForm formRef={formRef} handleSubmit={handleSubmit}/>
            </Box>
            <ResponsiveDivider/>
            <Box sx={{flex: 1}}>
                <ContactDetails/>
            </Box>
        </>
    );
};

export default Contact;
