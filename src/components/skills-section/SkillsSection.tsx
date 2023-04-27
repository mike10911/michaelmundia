import React, { useState } from "react";
import { colors } from "../../lib/colors";
import {
  SkillImage,
  SkillImageWrapper,
  SkillsSectionContainer,
  StyledContentContainer,
  StyledSkillsSectionTitle,
  StyledTabContainer,
  StyledTabName,
  StyledTabTitleContainer,
} from "./SkillsSection.styles";

import { skillTabs } from "../../lib/data";
import { H2 } from "../../lib/typography";
import { skillImageAnimation } from "./SkillsSectionAnimations";
import { AnimatePresence, motion } from "framer-motion";

// import { useState } from 'react';


const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);


  return (
    <SkillsSectionContainer id="skills">
      <StyledSkillsSectionTitle>
        SKILLS
      </StyledSkillsSectionTitle>
      <StyledTabContainer>
        <StyledTabTitleContainer>
          {skillTabs.map((tab, index) => (
            <StyledTabName active={activeTab === index}  onClick={(): void => setActiveTab(index)}>{tab.title}</StyledTabName>
          ))}
        </StyledTabTitleContainer>
      </StyledTabContainer>
      <StyledContentContainer>
        <AnimatePresence>
        <SkillImageWrapper
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          {skillTabs[activeTab].content.slice(0, 4).map((img) => (
            <SkillImage whileHover={{scale: 1.2}} alt="d" src={img} />
          ))}
        </SkillImageWrapper>

        <SkillImageWrapper
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          {skillTabs[activeTab].content.slice(4).map((img) => (
            <SkillImage whileHover={{scale: 1.2}} alt="d" src={img} />
          ))}
        </SkillImageWrapper>
        </AnimatePresence>
      </StyledContentContainer>
    </SkillsSectionContainer>
  );
};

export default SkillsSection;
