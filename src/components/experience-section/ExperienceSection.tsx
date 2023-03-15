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
        <StyledFigmaEmbed
          whileHover={{ scale: 1.1 }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FlsPWERVLvwLG2jVD2jQj5e%2FWhite-Hall-Hackathon%3Fnode-id%3D0%253A1%26t%3D1SCO92NHu602XGBi-1?nojump"
          allowFullScreen
          loading="lazy"
        />
        <StyledFigmaEmbed
          whileHover={{ scale: 1.1 }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FWzqneCdgX7GCttGmaDStJP%2FPortfolio%3Fnode-id%3D0%253A1%26t%3Di5H4HpTvskpbXTfU-1?nojump"
          allowFullScreen
          loading="lazy"
        />
        <StyledFigmaEmbed
          whileHover={{ scale: 1.1 }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FwxJ8V78BdS8iuARdK62zFx%2FThrift-it-App-Design%3Ft%3DP5WA0yhDnl6mubbT-1?nojump"
          allowFullScreen
          loading="lazy"
        />
        <StyledFigmaEmbed
          whileHover={{ scale: 1.1 }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FqFPwH9eyarbYH6XSWflTKb%2FPortfolio-Landing-Page%3Ft%3DP5WA0yhDnl6mubbT-1?nojump"
          allowFullScreen
          loading="lazy"
        />
        <StyledFigmaEmbed
          whileHover={{ scale: 1.1 }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fi4aAynQHKwElJv0sSIsNqV%2FPortfolio-Landing-Page-2%3Ft%3DP5WA0yhDnl6mubbT-1?nojump"
          allowFullScreen
          loading="lazy"
        />
        <StyledFigmaEmbed
          whileHover={{ scale: 1.1 }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FF9JEhOOYoNwv3IFyGRCTHH%2FThrifting-Bulletin%3Fnode-id%3D0%253A1%26t%3DxTeZF3dg4hwIyxwt-1"
          allowFullScreen
          loading="lazy"
        />
      </FigmaContainer>
    </>
  );
};

export default ExperienceSection;
