import React from "react";

import {SkillLabel, SkillProgress, ProgressBar} from "./SkillCard.styles";
import {SkillsCardWrapper} from "../shared/elements/elements.styles.js";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";

export default function SkillCard({ title, skills }) {
    return (
        <SkillsCardWrapper >
            <Typography variant="h6" align="center" sx={{mb:3}}>{title}</Typography>
            {skills.map((skill) => (
                <Box key={skill.name} sx={{mb : 2}}>
                    <SkillLabel>
                        <CheckCircle fontSize="small" />
                        <Typography>{skill.name}</Typography>
                    </SkillLabel>
                    <SkillProgress>
                        <ProgressBar style={{ width: `${skill.value}%` }} />
                    </SkillProgress>
                </Box>
            ))}
        </SkillsCardWrapper>
    );
}
