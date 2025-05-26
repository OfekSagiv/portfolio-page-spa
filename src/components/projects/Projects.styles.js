import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import {Tabs} from "@mui/material";

export const ProjectCardContainer = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
        padding: theme.spacing(0, 12),
    },
    [theme.breakpoints.down("md")]: {
        alignItems: "stretch",
        textAlign: "left",
    },
}));

export const ProjectButtonRow = styled(Box)(({ theme }) => ({
    margin: theme.spacing(2, 0),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
}));

export const ProjectInnerWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    width: "100%",
    height: "100%",
    flex: 1,
}));



export const StyledTab = styled(Tab)(({ theme }) => ({
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: 800,
    color: theme.palette.text.primary,

    "&.Mui-selected": {
        color: theme.palette.text.primary,
    },
}));

export const StyledTabs = styled(Tabs)(({ theme }) => ({
    "& .MuiTabs-indicator": {
        backgroundColor: theme.palette.mode === "dark"
            ? "#fff"
            : theme.palette.primary.main,
    },
}));
