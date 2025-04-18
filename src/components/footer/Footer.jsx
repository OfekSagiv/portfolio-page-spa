import React from "react";
import { FooterContainer, FooterText } from "./Footer.styles";
import aboutText from "../../constants/aboutText.js";

const Footer = () => {
    return (
        <FooterContainer component="footer">
            <FooterText variant="body2">
                &copy; 2025 {aboutText.name}. All rights reserved.
            </FooterText>
        </FooterContainer>
    );
};

export default Footer;
