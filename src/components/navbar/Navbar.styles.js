import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

export const NavbarContainer = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
}));

export const CustomToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1, 2),
}));

export const NavLinksWrapper = styled(Box)(({ theme }) => ({
    display: "flex" ,
    gap: theme.spacing(4),
    overflowX: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
        display: "none",
    },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    fontWeight: 600,
    cursor: "pointer",
    color: "inherit",
    textDecoration: "none",
    padding: theme.spacing(1, 2),
    borderBottom: "2px solid transparent",
    transition: "border-bottom 0.2s ease",
    whiteSpace: "nowrap",
    textTransform: "capitalize",
    "&.active": {
        borderBottom: `2px solid ${theme.palette.text.primary}`,
    },
}));
