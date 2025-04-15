import React, { useEffect, useRef } from "react";
import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";
import { scroller } from "react-scroll";
import "../css/Navbar.css";

const Navbar = ({ onSelect, selected }) => {
    const tabs = ["about", "technologies", "projects", "contact"];
    const navLinksRef = useRef(null);

    const handleSelect = (tab) => {
        onSelect(tab);
        scroller.scrollTo(tab, {
            duration: 500,
            smooth: true,
            offset: -70,
        });
    };

    useEffect(() => {
        if (navLinksRef.current) {
            navLinksRef.current.scrollLeft = navLinksRef.current.scrollWidth;
        }
    }, []);

    return (
        <AppBar position="fixed" className="navbar" color="default" elevation={1}>
            <Toolbar className="navbar-toolbar">
                <Box className="nav-links" ref={navLinksRef}>
                    {tabs.map((tab) => (
                        <Button
                            key={tab}
                            onClick={() => handleSelect(tab)}
                            className={`nav-button ${selected === tab ? "active" : ""}`}
                            disableRipple
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
