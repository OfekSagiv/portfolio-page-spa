import React, {useEffect, useState} from "react";
import {Card, CardContent, Container} from "@mui/material";

import "./App.css";

import About from "./components/about/About.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Technologies from "./components/Technologies/Technologies.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Box from "@mui/material/Box";



function App() {
    const [section, setSection] = useState("about");

    const renderSection = () => {
        switch (section) {
            case "about":
                return <About />;
            case "technologies":
                return <Technologies />;
            case "projects":
                return <Projects />;
            case "contact":
                return <Contact />;
            default:
                return <About />;
        }
    };

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [section]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                backgroundColor: "background.default",
                fontFamily: "Roboto, sans-serif",
            }}
        >
            <Navbar onSelect={setSection} selected={section} />

            <Box component="main" sx={{ flex: 1, pt: "80px" }}>
                <Box
                    component="section"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        px: 2.5,
                        py: 7.5,
                    }}
                >
                    <Container maxWidth="lg">
                        <Card elevation={1}>
                            <CardContent>{renderSection()}</CardContent>
                        </Card>
                    </Container>
                </Box>
            </Box>

            <Footer />
        </Box>
    );
}

export default App;
