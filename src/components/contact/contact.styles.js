import {Box, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

export const ContactContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

export const StyledContactTitle = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    marginBottom: theme.spacing(4),
}));
