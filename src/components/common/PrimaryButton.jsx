import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    fontSize: "1rem",
}));

export default function PrimaryButton({ children, ...props }) {
    return <StyledButton  variant="contained" color="primary" {...props}>{children}</StyledButton>;
}
