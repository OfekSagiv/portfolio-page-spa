import React from "react";
import {IconButton, Menu, Tooltip} from "@mui/material";
import { Brightness4, Brightness7, Menu as MenuIcon } from "@mui/icons-material";
import { SECTION_TABS } from "../../constants/section.js";
import { THEME } from "../../constants/theme.js";
import {MobileMenuItem} from "./Navbar.styles.js";

const MobileBar = ({selected, handleClick, toggleTheme, mode, anchorEl, handleMenuOpen, handleMenuClose}) => {
    const open = Boolean(anchorEl);

    return (
        <>
            <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
                <MenuIcon />
            </IconButton>

            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
                {Array.isArray(SECTION_TABS) ? SECTION_TABS.map((tab) => (
                        <MobileMenuItem key={tab} selected={selected === tab} onClick={() => handleClick(tab)}>
                            {tab}
                        </MobileMenuItem>)) : null}
            </Menu>

            <Tooltip title="Toggle theme">
                <IconButton onClick={toggleTheme} color="inherit">
                    {mode === THEME.DARK ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Tooltip>
        </>
    );
};

export default MobileBar;
