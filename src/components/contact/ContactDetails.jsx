import React from "react";
import {Stack, Typography} from "@mui/material";
import SocialLinks from "./SocialLinks.jsx";
import {SECTION_TITLES} from "../../constants/messages.js";
import {SOCIAL_LINKS} from "../../constants/contactRows.js";


const ContactDetails = () => {
    return (
        <>
            <Typography align={"center"} variant="h4" gutterBottom noWrap>{SECTION_TITLES.CONTACT}</Typography>
            <Stack spacing={5}>
                {SOCIAL_LINKS.map(({ icon, text, href }, i) => (
                    <SocialLinks key={i} icon={icon} text={text} href={href} />
                ))}
            </Stack>
        </>
    );
};

export default ContactDetails;
