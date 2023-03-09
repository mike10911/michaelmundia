import React from "react";
import { H1, H2 } from "../../lib/typography";
import PrimaryButton from "../primary-button/PrimaryButton";
import { StyledCallToActionBtnContainer } from "../primary-button/PrimaryButton.styles";
import {
  StyledLandingContainer,
  StyledM,
  StyledName,
  StyledNameContainer,
  StyledNameTitleContainer,
  StyledTitle,
} from "./LandingPage.styles";
import resume from "../../docs/MMResume2.pdf";

const LandingPage: React.FC = () => {
  return (
    <StyledLandingContainer>
      <StyledNameTitleContainer>
        <StyledNameContainer>
          <StyledName>MICHAEL</StyledName>
          <StyledM>M</StyledM>
          <StyledName>MUNDIA</StyledName>
        </StyledNameContainer>
        <StyledTitle>SOFTWARE DEVELOPER</StyledTitle>
      </StyledNameTitleContainer>
      <StyledCallToActionBtnContainer>
        <PrimaryButton btnText={"CONTACT"} btnLink={"#"}></PrimaryButton>
        <PrimaryButton btnText={"RESUME"} newTab btnLink={resume}></PrimaryButton>
      </StyledCallToActionBtnContainer>
    </StyledLandingContainer>
  );
};

export default LandingPage;
