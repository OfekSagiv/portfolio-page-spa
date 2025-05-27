import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import {Tabs, tabsClasses} from "@mui/material";

export const ProjectCardContainer = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
        padding: theme.spacing(3, 12),
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
    color: theme.palette.text.primary,
    "&.Mui-selected": {
        color: theme.palette.text.primary,
    },
    [theme.breakpoints.up("md")]: {
        textTransform: "capitalize",
        fontSize: "1.5rem",
        color: "inherit",
        minWidth: "auto",
        margin: theme.spacing(0, 4),
        padding: 0,
        whiteSpace: "nowrap",
        borderBottom: "2px solid transparent",
        transition: "border-bottom 0.2s ease",
        "&.Mui-selected": {
            borderBottom: `2px solid ${theme.palette.text.primary}`,
        },
    },
}));

export const StyledTabs = styled(Tabs)(({ theme }) => ({
    "& .MuiTabs-indicator": {
        backgroundColor:
            theme.palette.mode === "dark"
                ? "#fff"
                : theme.palette.primary.main,
    },

    [theme.breakpoints.down("md")]: {
        [`& .${tabsClasses.scrollButtons}`]: {
            color: theme.palette.text.primary,
            '&.Mui-disabled': {
                opacity: 0.3,
            },
        },
    },

    [theme.breakpoints.up("md")]: {
        [`& .${tabsClasses.scrollButtons}`]: {
            display: "none",
        },
    },
}));
