import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Section = styled("section")(({ theme }) => ({
    padding: theme.spacing(2, 1),
    backgroundColor: "#fff",
}));

export const CardContainer = styled(Box)(({ theme }) => ({
    display: "flex" ,
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: theme.spacing(4),
    padding: theme.spacing(0, 8),
    flexDirection: "row",
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
    color: theme.palette.grey[900],
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.7rem",
    },
}));

export const SideColumn = styled(Box)(({ theme }) => ({
    flex: "0 0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        order: -1,
        width: "100%",
    },
}));
