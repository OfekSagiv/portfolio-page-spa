import React from "react";
import {NavbarContainer, CustomToolbar, NavLinksWrapper, NavBarButton} from "./Navbar.styles";

import useNavbarLogic from "../../hooks/useNavbarLogic";
import { NAV_TABS } from "../../constants/navigation";
import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Navbar = ({ onSelect, selected, mode, toggleTheme }) => {
    const { navLinksRef, handleSelect } = useNavbarLogic(onSelect);

    return (

        <NavbarContainer position="fixed" color="default" elevation={1}>

            <CustomToolbar>

                <NavLinksWrapper ref={navLinksRef}>
                    {NAV_TABS.map((tab) => (
                        <NavBarButton
                            key={tab}
                            onClick={() => handleSelect(tab)}
                            className={selected === tab ? "active" : ""}
                            disableRipple
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </NavBarButton>
                    ))}
                    <Tooltip title="Toggle theme">
                        <IconButton onClick={toggleTheme} color="inherit">
                            {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>
                    </Tooltip>
                </NavLinksWrapper>

            </CustomToolbar>

        </NavbarContainer>
    );
};

export default Navbar;
