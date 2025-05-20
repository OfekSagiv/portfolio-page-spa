import React, { useState} from "react";
import { Box} from "@mui/material";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import {CardContainer, CustomSection} from "./components/shared/style/section.styles.js";
import {SECTION_IDS} from "./constants/sectionIds.js";
import {SECTION_COMPONENTS} from "./constants/sectionComponents.jsx";

function App({mode, toggleTheme}) {
    const [section, setSection] = useState(SECTION_IDS.ABOUT);

    const currentSection = SECTION_COMPONENTS[section] || SECTION_COMPONENTS.about;

    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight: "100vh",}}>
            <Navbar onSelect={setSection} selected={section} mode={mode} toggleTheme={toggleTheme}/>
            <CustomSection component="main" >
                <CardContainer >
                        {currentSection}
                </CardContainer>
            </CustomSection>
            <Footer/>
        </Box>
    );
}

export default App;
