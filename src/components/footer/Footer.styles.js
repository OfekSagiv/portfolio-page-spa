import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    textAlign: "center",
    padding: "20px 0",
    borderTop: `1px solid ${theme.palette.divider}`,
}));


