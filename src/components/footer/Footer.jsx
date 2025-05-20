import React from "react";
import { FooterContainer, } from "./Footer.styles";
import { COPYRIGHT_TEXT } from "../../constants/siteMeta";
import {Typography} from "@mui/material";

const Footer = () => {
    return (
        <FooterContainer component="footer">
            <Typography variant="body2">{COPYRIGHT_TEXT}</Typography>
        </FooterContainer >
    );
};

export default Footer;
