import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";

export const ContactContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(4),
    flexDirection: "row",

    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));
