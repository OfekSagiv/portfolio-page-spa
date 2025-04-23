import React from "react";
import {
    Box,
    Stack,
    Typography,
    TextField,
    Divider,
    Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import {Section, CardContainer, CardHeading, SideColumn} from "../common/SectionLayout";
import PrimaryButton from "../common/PrimaryButton";

const Contact = () => {
    return (
        <Section id="contact">
            <CardContainer sx={{ alignItems: "flex-start" }}>
                <Box
                    sx={{
                        flex: 1,
                        width: "100%",
                        maxWidth: { xs: "100%", md: 500 },
                        boxSizing: "border-box",
                    }}
                >
                    <CardHeading gutterBottom>Contact Me</CardHeading>

                    <Stack spacing={2}>
                        <TextField label="Name" fullWidth required />
                        <TextField label="Email" type="email" fullWidth required />
                        <TextField label="Message" multiline rows={4} fullWidth required />
                        <Box
                            sx={{
                                mt: 2,
                                display: "flex",
                                justifyContent: { xs: "center", md: "flex-start" },
                            }}
                        >
                            <PrimaryButton sx={{ width: "100%" }}>
                                Send Message
                            </PrimaryButton>
                        </Box>
                    </Stack>
                </Box>

                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                        mx: 2,
                        borderColor: "#ccc",
                        display: { xs: "none", md: "block" },
                    }}
                />

                <SideColumn>
                    <Box sx={{ width: "100%" }}>
                        <CardHeading gutterBottom>Reach me directly</CardHeading>
                        <Stack spacing={3}>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <GitHubIcon />
                                <Link
                                    href="https://github.com/OfekSagiv"
                                    target="_blank"
                                    underline="none"
                                    sx={{ fontSize: "1.1rem" }}
                                >
                                    github.com/OfekSagiv
                                </Link>
                            </Stack>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <LinkedInIcon />
                                <Link
                                    href="https://linkedin.com/in/ofek-sagiv-929694179"
                                    target="_blank"
                                    underline="none"
                                    sx={{ fontSize: "1.1rem" }}
                                >
                                    linkedin.com/in/ofeksagiv
                                </Link>
                            </Stack>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <EmailIcon />
                                <Link
                                    href="mailto:ofeksagiv@gmail.com"
                                    underline="none"
                                    sx={{ fontSize: "1.1rem" }}
                                >
                                    ofeksagiv@gmail.com
                                </Link>
                            </Stack>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <PhoneIcon />
                                <Typography sx={{ fontSize: "1.1rem" }}>NA</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <LocationOnIcon />
                                <Typography sx={{ fontSize: "1.1rem" }}>Tel Aviv, Israel</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </SideColumn>
            </CardContainer>
        </Section>
    );
};

export default Contact;
