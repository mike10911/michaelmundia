import React from "react";
import { colors } from "../../lib/colors";
import { SkillsSectionContainer, StyledContentContainer, StyledSkillsSectionTitle, StyledTabContainer } from "./SkillsSection.styles";


const SkillsSection: React.FC = () => {
  return (
      <SkillsSectionContainer id="skills">
        <StyledSkillsSectionTitle color={colors.WHITE}>
            SKILLS
        </StyledSkillsSectionTitle>
        <StyledTabContainer>
            
        </StyledTabContainer>
        <StyledContentContainer>

        </StyledContentContainer>

      </SkillsSectionContainer>
  );
};

export default SkillsSection;
