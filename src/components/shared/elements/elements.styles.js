import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Typography ,Link} from "@mui/material";

export const CustomSection = styled("section")(() => ({
    flex: 1,
    display: "flex",
    justifyContent: "center" ,
    alignItems: "center",
    paddingTop: "80px",
}));

export const commonCardStyles = (theme) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: theme.palette.mode === "light" ? "1.5px solid #c0c0c0" : "1.5px solid #333",
    boxShadow: theme.palette.mode === "light" ? "0 4px 16px rgba(0,0,0,0.12)" : "0 4px 16px rgba(0,0,0,0.5)",
    borderRadius: 12,
});

export const CardContainer = styled(Box)(({ theme }) => ({
    ...commonCardStyles(theme),
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: theme.spacing(4),
    padding: theme.spacing(8, 8),
    flexDirection: "row",
    borderRadius: 12,
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
        width: "1000px",
    },
    [theme.breakpoints.down("md")]: {
        boxSizing: 'border-box',
        width: "100%",
        flexDirection: "column-reverse",
        alignItems: "stretch",
        textAlign: "center",
        padding: theme.spacing(4, 3),
        margin: theme.spacing(3, 2),
    },
}));

export const SkillsCardWrapper = styled(Box)(({ theme }) => ({
    ...commonCardStyles(theme),
    padding: theme.spacing(3),
    flex: 1,
    minWidth: 270,
}));

export const MainBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
});

export const StyledContactText = styled(Typography)({
    fontSize: "1.5rem",
});

export const StyledContactLink = styled(Link)(({ theme }) => ({
    fontSize: "1.5rem",
    textDecoration: "none",
    color: theme.palette.text.primary,
}));


