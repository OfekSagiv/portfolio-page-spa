import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledProjectImage = styled("img")(({ theme }) => ({
    objectFit: "cover",
    width: 350,
    height: 350,
    borderRadius: 6,

    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
    [theme.breakpoints.down("md")]: {
        width: 220,
        height: 220,
    },
}));

export const ProjectCardContainer = styled(Box)(({ theme }) => ({
    flex: 1.5,
    height: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
        alignItems: "stretch",
        textAlign: "left",
    },
}));


export const ProjectButtonRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(1),

    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
}));

