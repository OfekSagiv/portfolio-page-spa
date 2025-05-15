import React from "react";
import {Box, Divider} from "@mui/material";
import {useContactForm} from "../../hooks/useContactForm";
import ContactForm from "./ContactForm.jsx";
import ContactDetails from "./ContactDetails.jsx";


const Contact = () => {
    const {formRef, handleSubmit} = useContactForm();

    return (
        <Box sx={{display: "flex", gap: 4}}>
            <Box>
                <ContactForm formRef={formRef} handleSubmit={handleSubmit}/>
            </Box>
            <Divider orientation="vertical" flexItem
                     sx={{borderColor: "divider", mx: 1, display: {xs: "none", md: "block"},}}/>
            <Box sx={{flex: 1, display: "flex", flexDirection: "column", height: "100%"}}>
                <ContactDetails/>
            </Box>
        </Box>
    );
};

export default Contact;
