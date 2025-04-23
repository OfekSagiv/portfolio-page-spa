import React from "react";
import SkillCard from "../SkillCard/SkillCard";
import {
    Section,
    CardContainer,
    CardHeading
} from "../common/SectionLayout.js";
import {
    SkillsContainer,

    SkillsGrid,
} from "./Technologies.styles";

import { frontend, backend, tools } from "../../constants/skillsData";

function Technologies() {
    return (
        <Section id="skills" >
            <CardContainer>
                <SkillsContainer>
                    <CardHeading>Explore my skills</CardHeading>
                    <SkillsGrid>
                        <SkillCard title="Frontend Development" skills={frontend} />
                        <SkillCard title="Backend Development" skills={backend} />
                        <SkillCard title="Technologies & Tools" skills={tools} />
                    </SkillsGrid>
                </SkillsContainer>
            </CardContainer>
        </Section>
    );
}

export default Technologies;
