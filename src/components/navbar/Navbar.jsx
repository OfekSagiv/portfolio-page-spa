import React from "react";
import {NavbarContainer, CustomToolbar, NavLinksWrapper, NavBarButton} from "./Navbar.styles";

import useNavbarLogic from "./useNavbarLogic.js";
import {SECTION_TABS} from "../../constants/section.js";
import {IconButton, Tooltip} from "@mui/material";
import {Brightness4, Brightness7} from "@mui/icons-material";
import {THEME} from "../../constants/theme.js";
import {CLASSNAMES} from "../../constants/classNames.js";

const Navbar = ({onSelect, selected, mode, toggleTheme}) => {
    const {navLinksRef, handleSelect} = useNavbarLogic(onSelect);

    return (
        <NavbarContainer position="fixed" color="default" elevation={1}>
            <CustomToolbar>
                <NavLinksWrapper ref={navLinksRef}>
                    {SECTION_TABS.map((tab) =>
                        (<NavBarButton key={tab} onClick={() => handleSelect(tab)}
                                      className={selected === tab ? CLASSNAMES.ACTIVE : ""}>
                            {tab}
                        </NavBarButton>))
                    }
                    <Tooltip title="Toggle theme">
                        <IconButton onClick={toggleTheme} color="inherit">
                            {mode === THEME.DARK ? <Brightness7/> : <Brightness4/>}
                        </IconButton>
                    </Tooltip>
                </NavLinksWrapper>
            </CustomToolbar>
        </NavbarContainer>
    );
};

export default Navbar;
