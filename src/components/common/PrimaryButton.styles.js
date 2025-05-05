import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)(({ theme }) => ({
    paddingLeft: theme.spacing(4) ,
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    fontSize: "1rem",
    minWidth: "250px",
    backgroundImage: "linear-gradient(to right, #1e293b 0%, #4b5563 51%, #1e293b 100%)",
    backgroundSize: "200% auto",
    color: "#fff",
    textTransform: "uppercase",
    transition: "0.5s",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.08)",
    fontWeight: 500,
    "&:hover": {
        backgroundPosition: "right center",
        color: "#fff",
        textDecoration: "none",
    },
}));
