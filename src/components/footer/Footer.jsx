import React from "react";
import { FooterContainer, FooterText } from "./Footer.styles";
import { COPYRIGHT_TEXT } from "../../constants/siteMeta";

const Footer = () => {
    return (
        <FooterContainer component="footer">
            <FooterText variant="body2">
                {COPYRIGHT_TEXT}
            </FooterText>
        </FooterContainer>
    );
};

export default Footer;
