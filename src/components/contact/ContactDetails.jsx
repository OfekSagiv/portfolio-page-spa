import React from "react";
import {Stack, Typography} from "@mui/material";
import ContactRow from "./ContactRow.jsx";
import {SECTION_TITLES} from "../../constants/messages.js";
import {CONTACT_ROWS} from "../../constants/contactRows.js";


const ContactDetails = () => {
    return (
        <>
            <Typography align={"center"} variant="h4" gutterBottom noWrap>{SECTION_TITLES.CONTACT}</Typography>
            <Stack spacing={5}>
                {CONTACT_ROWS.map(({ icon, text, href }, i) => (
                    <ContactRow key={i} icon={icon} text={text} href={href} />
                ))}
            </Stack>
        </>
    );
};

export default ContactDetails;
