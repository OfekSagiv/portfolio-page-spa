import React from "react";
import SkillCard from "../SkillCard/SkillCard";
import {SkillsGrid} from "./Technologies.styles";

import { frontend, backend, tools } from "../../constants/skillsData";
import {Box, Typography} from "@mui/material";

function Technologies() {
    return (
        <>
            <Box sx={{ flex: 1 }} >
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography variant="h4">Explore my skills</Typography>
                </Box>
                <SkillsGrid>
                    <SkillCard title="Frontend Development" skills={frontend} />
                    <SkillCard title="Backend Development" skills={backend} />
                    <SkillCard title="Technologies & Tools" skills={tools} />
                </SkillsGrid>
            </Box>
        </>
    );
}

export default Technologies;
