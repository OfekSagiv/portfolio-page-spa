import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import {Typography , Box} from "@mui/material";

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 300,
    height: 300,
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
    display: "block",
    [theme.breakpoints.down("md")]: {
        width: 220,
        height: 220,
    },
}));

export const GreetingText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h6.fontSize,

}));

export const NameText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h4.fontSize,
    paddingBottom: theme.spacing(2.5),
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
    maxWidth: 500,
    lineHeight: 1.6,
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0,2),
    },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        justifyContent: "center",
    },
}));
