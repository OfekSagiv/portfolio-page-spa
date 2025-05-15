import React, {useEffect, useState} from "react";
import { Box} from "@mui/material";

import "./App.css";

import About from "./components/about/About.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Technologies from "./components/Technologies/Technologies.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import {CardContainer, Section} from "./components/shared/style/section.styles.js";

function App({mode, toggleTheme}) {
    const [section, setSection] = useState("about");

    const renderSection = () => {
        switch (section) {
            case "about":
                return <About/>;
            case "technologies":
                return <Technologies/>;
            case "projects":
                return <Projects/>;
            case "contact":
                return <Contact/>;
            default:
                return <About/>;
        }
    };

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [section]);

    return (
        <Box sx={{display: "flex", flexDirection: "column", minHeight: "100vh",}}>
            <Navbar onSelect={setSection} selected={section} mode={mode} toggleTheme={toggleTheme}/>
            <Section component="main" >
                <CardContainer>
                        {renderSection()}
                </CardContainer>
            </Section>
            <Footer/>
        </Box>
    );
}

export default App;
