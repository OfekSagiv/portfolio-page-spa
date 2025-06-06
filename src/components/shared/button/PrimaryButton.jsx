import React from "react";
import { StyledButton } from "./PrimaryButton.styles.js";

export default function PrimaryButton({ children, ...props }) {
    return (
        < StyledButton variant="contained" color="primary" {...props}>
            {children}
        </StyledButton>
    );
}
