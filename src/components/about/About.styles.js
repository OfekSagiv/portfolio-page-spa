import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export const StyledAvatar = styled(Avatar)(() => ({
    width: 300,
    height: 300,
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
    display: "block",
}));

export const CVButtonWrapper = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
}));
