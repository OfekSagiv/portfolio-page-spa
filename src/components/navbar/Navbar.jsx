import React from "react";
import {
    NavbarContainer,
    CustomToolbar,
    NavLinksWrapper,
    StyledButton,
} from "./Navbar.styles";

import useNavbarLogic from "../../hooks/useNavbarLogic";

const tabs = ["about", "technologies", "projects", "contact"];

const Navbar = ({ onSelect, selected }) => {
    const { navLinksRef, handleSelect } = useNavbarLogic(onSelect);

    return (
        <NavbarContainer position="fixed" color="default" elevation={1}>
            <CustomToolbar>
                <NavLinksWrapper ref={navLinksRef}>
                    {tabs.map((tab) => (
                        <StyledButton
                            key={tab}
                            onClick={() => handleSelect(tab)}
                            className={selected === tab ? "active" : ""}
                            disableRipple
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </StyledButton>
                    ))}
                </NavLinksWrapper>
            </CustomToolbar>
        </NavbarContainer>
    );
};

export default Navbar;
