import React from "react";
import {Stack, Typography, Link} from "@mui/material";

const ContactRow = ({icon, text, href}) => {
    return (
        <Stack direction="row" spacing={1.5} alignItems="center">
            {icon}
            {href ? (
                <Link href={href} target="_blank" underline="none" sx={{fontSize: "1.5rem", color: "text.primary"}}>
                    {text}
                </Link>) : (
                <Typography sx={{fontSize: "1.5rem"}}>{text}</Typography>
            )}
        </Stack >
    );
};

export default ContactRow;
