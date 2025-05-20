import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledProjectImage = styled("img")({
    objectFit: "cover",
    width: 350,
    height: 350,
    borderRadius: 6,
    overflow: "hidden",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
});

export const ProjectCardContainer = styled(Box)(({ theme }) => ({
    flex: 1,
    height: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: theme.spacing(5),
}));
