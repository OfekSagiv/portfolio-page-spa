import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CheckCircle } from "@mui/icons-material";

export const CardWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius * 3,
    padding: theme.spacing(3),
    boxShadow: theme.shadows[1],
    flex: 1,
    minWidth: 250,
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.25rem",
    fontWeight: 600,
    marginBottom: theme.spacing(2),
}));

export const SkillLabel = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
}));


export const SkillProgress = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grey[300],
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
}));

export const ProgressBar = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grey[900],
    height: "100%",
    transition: "width 0.3s ease-in-out",
}));
