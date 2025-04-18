import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "#f5f5f5",
    color: "#000",
    textAlign: "center",
    padding: "20px 0",
    fontSize: "14px",
    fontFamily: "'Roboto', sans-serif",
    borderTop: "1px solid #e0e0e0",
}));

export const FooterText = styled(Typography)(({ theme }) => ({
    margin: 0,
    opacity: 0.7,
}));
