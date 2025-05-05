import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 350,
    height: 350,
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
    [theme.breakpoints.down("md")]: {
        width: 250,
        height: 250,
        alignSelf: "center",
        order: -1,
        marginBottom: theme.spacing(4),
    },
}));

export const CVButtonWrapper = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(4) ,
    display: "flex",
    justifyContent: "center",
}));
