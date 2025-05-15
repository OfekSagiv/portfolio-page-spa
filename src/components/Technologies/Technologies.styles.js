import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const SkillsGrid = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: theme.spacing(3),
    width: "100%",
}));
