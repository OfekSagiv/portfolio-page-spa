import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

export const StyledDivider = styled(Divider)(({ theme }) => ({
    borderColor: theme.palette.divider,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: "block",
    },
}));
