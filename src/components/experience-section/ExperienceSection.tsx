import React from "react";
import ExperienceCard from "./experience-card/ExperienceCard";
import {
  ExperienceSectionContainer,
  FigmaContainer,
  StyledDesignExperienceSectionTitle,
  StyledExperienceCardContainer,
  StyledExperienceSectionTitle,
  StyledFigmaEmbed,
} from "./ExperienceSection.styles";
import { experienceCardData } from "../../lib/data";
import { ExperienceCardContainer } from "./experience-card/ExperienceCard.styles";
import { designExpData } from "../../lib/data";
import { m } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ExperienceSection: React.FC = () => {
  return (
    <>
      <ExperienceSectionContainer id="exp">
        <StyledExperienceSectionTitle>EXPERIENCE</StyledExperienceSectionTitle>
        <StyledExperienceCardContainer>
          {experienceCardData.map((card) => {
            return (
              <ExperienceCard
                image={card.image}
                modalLogo={card.modalLogo}
                jobTitle={card.jobTitle}
                backgroundColor={card.backgroundColor}
                textColor={card.textColor}
                company={card.company}
                date={card.date}
                location={card.location}
                bulletPoints={card.bulletPoints}
                id={card.id}
              />
            );
          })}
        </StyledExperienceCardContainer>
      </ExperienceSectionContainer>
      <FigmaContainer id="design">
        <StyledDesignExperienceSectionTitle>
          DESIGN EXPERIENCE
        </StyledDesignExperienceSectionTitle>
        {designExpData.map((card) => {
          return (
            <StyledFigmaEmbed
              whileHover={{ scale: 1.1 }}
              src={card.figmaLink}
              allowFullScreen
              loading="lazy"
            />
          );
        })}
      </FigmaContainer>
    </>
  );
};

export default ExperienceSection;
