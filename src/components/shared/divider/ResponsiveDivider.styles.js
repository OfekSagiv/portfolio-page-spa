import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

// export const StyledDivider = styled(Divider)(({ theme }) => ({
//     borderColor: theme.palette.divider,
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     display: "none",
//     [theme.breakpoints.up("md")]: {
//         display: "block",
//     },
// }));


export const StyledDivider = styled(Divider)(({ theme }) => ({
    borderColor: theme.palette.divider,
    margin: theme.spacing(2, 0),

    [theme.breakpoints.up("md")]: {
        margin: theme.spacing(0, 8),
        height: "auto",
        alignSelf: "stretch",
        borderLeftWidth: 1,
        borderRightWidth: 0,
    },

    [theme.breakpoints.down("md")]: {
        width: "100%",
        borderTopWidth: 1,
        borderBottomWidth: 0,
        margin: theme.spacing(6, 0),
    },
}));
