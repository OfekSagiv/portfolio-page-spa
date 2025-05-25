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
    fontSize: "1rem",
    color: "inherit",
    textTransform: "capitalize",
    borderBottom: "2px solid transparent",
    transition: "border-bottom 0.2s ease",
    whiteSpace: "nowrap",
    "&.active": {
        borderBottom: `2px solid ${theme.palette.text.primary}`,
    },
}));
