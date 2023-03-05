import React from "react";
import { ExperienceCardProps } from "../../../lib/types";
import PrimaryButton from "../../primary-button/PrimaryButton";
import {
  ExperienceCardContainer,
  StyledExperienceCardImage,
  StyledExperienceCardTitle,
} from "./ExperienceCard.styles";

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
  return (
    <ExperienceCardContainer backgroundColor={props.backgroundColor}>
      <StyledExperienceCardImage src={props.image} />
      <StyledExperienceCardTitle color={props.textColor}>{props.jobTitle}</StyledExperienceCardTitle>
      <PrimaryButton
        primaryColor={props.textColor}
        secondaryColor={props.backgroundColor}
        btnText="MORE"
      />
    </ExperienceCardContainer>
  );
};

export default ExperienceCard;
