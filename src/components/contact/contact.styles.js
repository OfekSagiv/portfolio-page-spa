import {Box, TextField, Typography} from "@mui/material";
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

export const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiInputLabel-outlined": {
        backgroundColor: theme.palette.background.paper,
        padding: "0 4px",
    },
}));
