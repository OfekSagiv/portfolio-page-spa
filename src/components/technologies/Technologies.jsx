import React from "react";
import SkillCard from "../SkillCard/SkillCard";
import {SkillsGrid} from "./Technologies.styles";

import {skillSections} from "../../constants/skillsData";
import {Box, Typography} from "@mui/material";

function Technologies() {
    return (
        <>
            <Box sx={{ flex: 1 }} >
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography variant="h4">Explore my skills</Typography>
                </Box>
                <SkillsGrid>
                    {skillSections.map(({ title, skills }) => (
                        <SkillCard key={title} title={title} skills={skills} />
                    ))}
                </SkillsGrid>
            </Box>
        </>
    );
}

export default Technologies;
