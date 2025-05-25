import React from "react";
import {Stack} from "@mui/material";
import SocialLinks from "./SocialLinks.jsx";
import {SECTION_TITLES} from "../../constants/messages.js";
import {SOCIAL_LINKS} from "../../constants/contactRows.js";
import {StyledContactTitle} from "./contact.styles.js";


const ContactDetails = () => {
    return (
        <>
            <StyledContactTitle variant="h4" gutterBottom noWrap>{SECTION_TITLES.CONTACT}</StyledContactTitle>
            <Stack spacing={5}>
                {SOCIAL_LINKS.map(({ icon, text, href }, i) => (
                    <SocialLinks key={i} icon={icon} text={text} href={href} />
                ))}
            </Stack>
        </>
    );
};

export default ContactDetails;
