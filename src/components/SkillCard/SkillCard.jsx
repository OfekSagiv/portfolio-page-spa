import React from "react";

import {
    CardWrapper,
    CardTitle,
    SkillItem,
    SkillLabel,
    SkillName,
    SkillProgress,
    ProgressBar,
    CheckIcon,
} from "./SkillCard.styles";

export default function SkillCard({ title, skills }) {
    return (
        <CardWrapper>
            <CardTitle>{title}</CardTitle>
            {skills.map((skill) => (
                <SkillItem key={skill.name}>
                    <SkillLabel>
                        <CheckIcon fontSize="small" />
                        <SkillName>{skill.name}</SkillName>
                    </SkillLabel>
                    <SkillProgress>
                        <ProgressBar style={{ width: `${skill.value}%` }} />
                    </SkillProgress>
                </SkillItem>
            ))}
        </CardWrapper>
    );
}
