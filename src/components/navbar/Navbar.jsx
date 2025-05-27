import React, {useState} from "react";
import {NavbarContainer, CustomToolbar} from "./Navbar.styles";
import {useMediaQuery, useTheme,} from "@mui/material";
import DesktopBar from "./DesktopBar.jsx";
import MobileBar from "./MobileBar.jsx";

const Navbar = ({onSelect, selected, mode, toggleTheme}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    const handleClick = (tab) => {
        onSelect(tab);
        handleMenuClose();
    };


    return (
        <NavbarContainer position="fixed" color="default" elevation={1}>
            <CustomToolbar>
                {isMobile ? (
                    <MobileBar selected={selected} handleClick={handleClick} toggleTheme={toggleTheme} mode={mode}
                               anchorEl={anchorEl}
                               handleMenuOpen={handleMenuOpen}
                               handleMenuClose={handleMenuClose}/>
                ) : (
                    <DesktopBar
                        selected={selected}
                        onSelect={onSelect}
                        toggleTheme={toggleTheme}
                        mode={mode}
                    />
                )}
            </CustomToolbar>
        </NavbarContainer>
    );
};

export default Navbar;
