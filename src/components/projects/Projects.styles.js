import { styled } from "@mui/material/styles";

export const StyledProjectImage = styled("img")({
    objectFit: "cover",
    width: 350,
    height: 350,
    borderRadius: 6,
    overflow: "hidden",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
});
