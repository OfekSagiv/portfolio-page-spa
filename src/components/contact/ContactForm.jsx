import React from "react";
import {Stack, TextField, Typography} from "@mui/material";
import {CONTACT_FORM_LABELS} from "../../constants/contactFormLabels.js";
import {CONTACT_FIELDS} from "../../constants/contactFormFields.js";
import {StyledButtonFull} from "../shared/button/PrimaryButton.styles.js";


const ContactForm = ({formRef, handleSubmit}) => {
    return (
        <>
            <Typography align={"center"} variant="h4" gutterBottom>{CONTACT_FORM_LABELS.heading}</Typography>
            <form ref={formRef} onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    {CONTACT_FIELDS.map((
                        {name, label, type, multiline, rows}) => (
                        <TextField key={name} label={label} name={name} type={type} fullWidth required
                                   multiline={multiline} rows={rows || undefined}/>
                    ))}
                </Stack>
                <StyledButtonFull type={CONTACT_FORM_LABELS.button.type}>
                    {CONTACT_FORM_LABELS.button.text}
                </StyledButtonFull>
            </form>
        </>
    );
};

export default ContactForm;
