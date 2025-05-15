import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    textAlign: "center",
    padding: "20px 0",
    fontSize: "14px",
    fontFamily: "'Roboto', sans-serif",
    borderTop: `1px solid ${theme.palette.divider}`,
}));

export const FooterText = styled(Typography)(({ theme }) => ({
    margin: 0,
    opacity: 0.7,
}));
