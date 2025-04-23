import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ProjectImageBox = styled(Box)(({ theme }) => ({
    width: 350,
    height: 350,
    borderRadius: theme.shape.borderRadius * 2,
    overflow: "hidden",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
    [theme.breakpoints.down("md")]: {
        width: 250,
        height: 250,
        alignSelf: "center",
        order: -1,
    },
}));

export const StyledProjectImage = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
});
