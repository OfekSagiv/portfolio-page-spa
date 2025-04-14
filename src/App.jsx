import React, {useEffect, useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const [section, setSection] = useState("about");

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [section]);

    return (
        <div className="app-root">
            <Navbar onSelect={setSection} selected={section}/>
            <main>

            </main>
            <Footer/>
        </div>
    );
}

export default App;
