import React from "react";
import ExperienceCard from "./experience-card/ExperienceCard";
import {
  ExperienceSectionContainer,
  StyledExperienceSectionTitle,
} from "./ExperienceSection.styles";
import { experienceCardData } from "../../lib/data";

const ExperienceSection: React.FC = () => {
  return (
    <ExperienceSectionContainer>
      <StyledExperienceSectionTitle>EXPERIENCE</StyledExperienceSectionTitle>
      {experienceCardData.map((card) => {
        return (
          <ExperienceCard
           
            image={card.image}
            jobTitle={card.jobTitle}
            backgroundColor={card.backgroundColor}
            textColor={card.textColor}
            company={card.company}
            date={card.date}
            location={card.location}
            bulletPoints={card.bulletPoints} id={card.id}          />
        );
      })}
    </ExperienceSectionContainer>
  );
};

export default ExperienceSection;
