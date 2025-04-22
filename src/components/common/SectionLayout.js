import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Section = styled("section")(({ theme }) => ({
    padding: theme.spacing(10, 2),
    backgroundColor: "#fff",
}));

export const CardContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: theme.spacing(4),
    padding: theme.spacing(0, 8),
    flexWrap: "wrap",
}));



export const CardHeading = styled(Typography)(({ theme }) => ({
    fontSize: "2rem",
    fontWeight: 600,
    color: theme.palette.grey[900],
}));
