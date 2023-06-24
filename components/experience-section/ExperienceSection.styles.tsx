import { motion } from "framer-motion";
import styled, { AnyStyledComponent } from "styled-components";
import { H1 } from "../../lib/typography";
import { ComponentType } from "react";

const ExperienceSectionContainer = styled.div`
  margin-top: 15em;
  text-align: center;
`;
const StyledExperienceCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(670px, 1fr));
  grid-gap: 10px;
  padding-left: 5em;
  padding-right: 5em;
  max-width: 100%;
  gap: 1em;
`;

const StyledExperienceSectionTitle = styled(H1)`
  padding-top: 1.5em;
  letter-spacing: 0.2rem;
  padding-bottom: 2em;
`;
const FigmaContainer : ComponentType = styled(motion.div)`
  margin-top: 15em;
  text-align: center;

  padding-top: 2em;
  padding-left: 3em;
  padding-right: 3em;
`;
const StyledDesignExperienceSectionTitle = styled(H1)`
  letter-spacing: 0.2rem;
  padding-bottom: 2em;
`;

export const StyledFigmaEmbed = styled(motion.iframe)`
  margin: 2em;
  width: 45em;
  height: 30em;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid;
`;


export {
  ExperienceSectionContainer,
  StyledExperienceSectionTitle,
  FigmaContainer,
  StyledDesignExperienceSectionTitle,
  StyledExperienceCardContainer,
};
