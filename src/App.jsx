import React, {useEffect, useState} from "react";
import {Card, CardContent, Container} from "@mui/material";

import "./App.css";

import About from "./components/about/About.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Technologies from "./components/Technologies/Technologies.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";



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
        <div className="app-root">
            <Navbar onSelect={setSection} selected={section}/>
            <main>
                <section>
                    <Container maxWidth="lg">
                        <Card className="main-card">
                            <CardContent>
                                {renderSection()}
                            </CardContent>
                        </Card>
                    </Container>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
