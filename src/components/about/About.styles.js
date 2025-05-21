import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import {Typography} from "@mui/material";

export const StyledAvatar = styled(Avatar)(() => ({
    width: 300,
    height: 300,
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
    display: "block",
}));

export const GreetingText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h6.fontSize,
}));

export const NameText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h4.fontSize,
    paddingBottom: theme.spacing(2.5),
}));

export const DescriptionText = styled(Typography)(() => ({
    maxWidth: 500,
    lineHeight: 1.6,
}));
