import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import {MenuItem} from "@mui/material";

export const NavbarContainer = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
}));

export const CustomToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 2),

    [theme.breakpoints.up("md")]: {
        justifyContent: "center", // בדסקטופ: מרכז הכל (כולל רווח בין כפתורים אם תכניס אותם בשכבת Wrapper)
        gap: theme.spacing(4), // רווח בין כפתורים בדסקטופ
    },

    [theme.breakpoints.down("md")]: {
        justifyContent: "space-between",
        padding: theme.spacing(0, 4), // רווח בצדדים במסכים קטנים
    },
}));

export const NavLinksWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(4),
    overflowX: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
        display: "none",
    },
}));

export const NavBarButton = styled(Button)(({ theme }) => ({
    minWidth: "auto",
    padding: 0,
    fontSize: "1.5rem",
    color: "inherit",
    textTransform: "capitalize",
    borderBottom: "2px solid transparent",
    transition: "border-bottom 0.2s ease",
    margin: theme.spacing(0, 4),
    whiteSpace: "nowrap",
    "&.active": {
        borderBottom: `2px solid ${theme.palette.text.primary}`,
    },
}));

export const MobileMenuItem = styled(MenuItem)(({ theme }) => ({
    fontSize: "1rem",
    color: "inherit",
    textTransform: "capitalize",
    borderBottom: "2px solid transparent",
    transition: "border-bottom 0.2s ease",
    justifyContent: "center",
    textAlign: "center",
    whiteSpace: "nowrap",
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
    },
}));
