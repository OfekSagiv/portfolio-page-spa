import React from "react";
import {Stack, Typography} from "@mui/material";
import ContactRow from "./ContactRow.jsx";
import {Icons} from "../shared/icons/icons.jsx";
import {CONTACT_INFO} from "../../constants/contactInfo.js";
import {SECTION_TITLES} from "../../constants/messages.js";

const ContactDetails = () => {
    return (
        <>
            <Typography align={"center"} variant="h4" gutterBottom noWrap>{SECTION_TITLES.contact}</Typography>
            <Stack spacing={5}>
                <ContactRow icon={Icons.github} text={CONTACT_INFO.github.label} href={CONTACT_INFO.github.url}/>
                <ContactRow icon={Icons.linkedin} text={CONTACT_INFO.linkedin.label} href={CONTACT_INFO.linkedin.url}/>
                <ContactRow icon={Icons.email} text={CONTACT_INFO.email} href={`mailto:${CONTACT_INFO.email}`}/>
                <ContactRow icon={Icons.phone} text={CONTACT_INFO.phone}/>
                <ContactRow icon={Icons.location} text={CONTACT_INFO.location}/>
            </Stack>
        </>
    );
};

export default ContactDetails;
