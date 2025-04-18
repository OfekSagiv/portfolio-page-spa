import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Section = styled("section")(({ theme }) => ({
    padding: theme.spacing(10, 2),
    backgroundColor: "#fff",
}));

export const CardContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: theme.spacing(4),
    flexWrap: "wrap",
}));

export const TextColumn = styled(Box)(({ theme }) => ({
    flex: 1,
    minWidth: "300px",
    textAlign: "left",
}));

export const SideColumn = styled(Box)(({ theme }) => ({
    flex: "0 0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));
