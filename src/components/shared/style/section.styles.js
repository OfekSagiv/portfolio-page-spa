import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export const Section = styled("section")(() => ({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "80px",
}));


export const CardContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: theme.spacing(4),
    padding: theme.spacing(8, 8),
    flexDirection: "row",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: theme.palette.mode === "light"
        ? "1.5px solid #c0c0c0"
        : "1.5px solid #333",
    boxShadow: theme.palette.mode === "light"
        ? "0 4px 16px rgba(0,0,0,0.12)"
        : "0 4px 16px rgba(0,0,0,0.5)",
    borderRadius: 12,
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "stretch",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));

export const CardHeading = styled(Typography)(({ theme }) => ({
    fontSize: "2rem",
    fontWeight: 600,
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.7rem",
    },
}));
