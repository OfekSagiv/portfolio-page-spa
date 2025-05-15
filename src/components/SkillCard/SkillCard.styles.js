import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const CardWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    border: theme.palette.mode === "light"
        ? "1.5px solid #c0c0c0"
        : "1.5px solid #333",
    boxShadow: theme.palette.mode === "light"
        ? "0 4px 16px rgba(0,0,0,0.12)"
        : "0 4px 16px rgba(0,0,0,0.5)",
    borderRadius: theme.shape.borderRadius * 3,
    padding: theme.spacing(3),
    flex: 1,
    minWidth: 250,
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.25rem",
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
}));

export const SkillLabel = styled(Box)(({ theme }) => ({
    display: "flex",
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
