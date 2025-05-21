import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";


export const SkillLabel = styled(Box)(({ theme }) => ({
    display: "flex" ,
    alignItems: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
    color: theme.palette.text.primary,
}));

export const SkillProgress = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.divider,
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
}));

export const ProgressBar = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    transition: "width 0.3s ease-in-out",
}));
