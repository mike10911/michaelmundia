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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { FigmaEmbed } from "./figma-embed/FigmaEmbed";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ExperienceSection: React.FC = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  React.useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);
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
          return <FigmaEmbed name={card.name} figmaLink={card.figmaLink} />;
        })}
      </FigmaContainer>
    </>
  );
};

export default ExperienceSection;
