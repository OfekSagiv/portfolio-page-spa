import React from "react";
import {Box} from "@mui/material";
import {useContactForm} from "../../hooks/useContactForm";
import ContactForm from "./ContactForm.jsx";
import ContactDetails from "./ContactDetails.jsx";
import ResponsiveDivider from "../shared/divider/ResponsiveDivider.jsx";
import {ContactContainer} from "./contact.styles.js";


const Contact = () => {
    const {formRef, handleSubmit} = useContactForm();

    return (
        <ContactContainer>
            <Box>
                <ContactForm formRef={formRef} handleSubmit={handleSubmit}/>
            </Box>
            <ResponsiveDivider/>
            <Box sx={{flex: 1, display: "flex", flexDirection: "column"}}>
                <ContactDetails/>
            </Box>
            </ContactContainer>
    );
};

export default Contact;
