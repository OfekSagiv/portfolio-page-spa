import React from "react";

import {
    CardWrapper,
    CardTitle,
    SkillLabel,
    SkillProgress,
    ProgressBar,
} from "./SkillCard.styles";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";

export default function SkillCard({ title, skills }) {
    return (
        <CardWrapper>
            <CardTitle>{title}</CardTitle>
            {skills.map((skill) => (
                <Box key={skill.name} sx={{mb : 2}}>
                    <SkillLabel>
                        <CheckCircle fontSize="small" />
                        <Typography>{skill.name}</Typography>
                    </SkillLabel>
                    <SkillProgress>
                        <ProgressBar style={{ width: `${skill.value}%` }} />
                    </SkillProgress>
                </Box >
            ))}
        </CardWrapper>
    );
}
