import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import "../css/About.css";

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-text">
                    <Typography variant="h4" className="about-greeting">Hello, I'm</Typography>
                    <Typography variant="h3" className="about-name">Ofek Sagiv</Typography>

                    <Typography variant="h6" className="about-description" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>

                    <Box className="cv-button-wrapper">
                        <Button
                            variant="contained"
                            color="primary"
                            href="/cv.pdf"
                            download
                            endIcon={<DownloadIcon />}
                            sx={{
                                mt: 2,
                                px: 4,
                                py: 1.5,
                                fontSize: "1rem",
                            }}>
                            Download my CV
                        </Button>
                    </Box>
                </div>

                <div className="about-avatar">
                    <Avatar src="/photo.png" alt="Ofek Sagiv" />
                </div>
            </div>
        </section>
    );
};

export default About;
