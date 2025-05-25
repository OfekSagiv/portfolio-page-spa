import React, { useState} from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import {CardContainer, CustomSection, MainBox} from "./components/shared/elements/elements.styles.js";
import {SECTION_IDS} from "./constants/section.js";
import {SECTION_COMPONENTS} from "./components/shared/section/sectionObject.jsx";

function App({mode, toggleTheme}) {
    const [section, setSection] = useState(SECTION_IDS.ABOUT);

    const currentSection = SECTION_COMPONENTS[section] || SECTION_COMPONENTS.about;

    return (
        <MainBox>
            <Navbar onSelect={setSection} selected={section} mode={mode} toggleTheme={toggleTheme}/>
            <CustomSection component="main" >
                <CardContainer >
                        {currentSection}
                </CardContainer>
            </CustomSection>
            <Footer/>
        </MainBox>
    );
}

export default App;
