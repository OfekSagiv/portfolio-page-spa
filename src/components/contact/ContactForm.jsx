import React from "react";
import {Stack, TextField, Typography} from "@mui/material";
import PrimaryButton from "../shared/button/PrimaryButton";
import {CONTACT_FORM_LABELS} from "../../constants/contactFormLabels.js";

const ContactForm = ({formRef, handleSubmit}) => {
    return (
        <>
            <Typography variant="h4" gutterBottom>{CONTACT_FORM_LABELS.heading}</Typography>
            <form ref={formRef} onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField label={CONTACT_FORM_LABELS.name.label} name={CONTACT_FORM_LABELS.name.name} fullWidth
                               required/>
                    <TextField label={CONTACT_FORM_LABELS.email.label} name={CONTACT_FORM_LABELS.email.name}
                               type={CONTACT_FORM_LABELS.email.type} fullWidth required/>
                    <TextField label={CONTACT_FORM_LABELS.message.label} name={CONTACT_FORM_LABELS.message.name}
                               multiline rows={4} fullWidth required/>
                </Stack>
                <PrimaryButton type={CONTACT_FORM_LABELS.button.type} sx={{width: "100%", mt: 2}}>
                    {CONTACT_FORM_LABELS.button.text}
                </PrimaryButton>
            </form>
        </>
    );
};

export default ContactForm;
