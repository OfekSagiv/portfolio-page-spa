import React from "react";
import { NavLinksWrapper, NavBarButton } from "./Navbar.styles";
import { Tooltip, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { THEME } from "../../constants/theme.js";
import { CLASSNAMES } from "../../constants/classNames.js";
import { SECTION_TABS } from "../../constants/section.js";

const DesktopBar = ({ selected, onSelect, toggleTheme, mode }) => {
    return (
        <NavLinksWrapper>
            {SECTION_TABS.map((tab) => (
                <NavBarButton
                    key={tab}
                    onClick={() => onSelect(tab)}
                    className={selected === tab ? CLASSNAMES.ACTIVE : ""}
                >
                    {tab}
                </NavBarButton>
            ))}
            <Tooltip title="Toggle theme">
                <IconButton onClick={toggleTheme} color="inherit">
                    {mode === THEME.DARK ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Tooltip>
        </NavLinksWrapper>
    );
};

export default DesktopBar;
