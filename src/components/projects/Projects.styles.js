import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const TextColumn = styled(Box)(({ theme }) => ({
    flex: 1,
    minWidth: "300px",
}));

export const ImageColumn = styled(Box)(({ theme }) => ({
    flex: "0 0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "300px",
}));

export const ProjectImage = styled("img")(({ theme }) => ({
    width: "100%",
    aspectRatio: "1 / 1",
    objectFit: "cover",
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: theme.shadows[2],
    maxWidth: "300px",
}));
