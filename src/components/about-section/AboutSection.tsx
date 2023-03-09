import React from "react";
import {
  StyledAboutSectionContainer,
  StyledAboutSectionTitle,
  StyledTestimonialContainer1,
  StyledTestimonialContainer2,
  StyledTestimonialsContainer,
  StyledTestimonialTitle,
} from "./AboutSection.styles";

const AboutSection: React.FC = () => {
  return (
    <StyledAboutSectionContainer id="about">
      <StyledAboutSectionTitle color="white">ABOUT</StyledAboutSectionTitle>
      <StyledTestimonialsContainer>
        <StyledTestimonialContainer1></StyledTestimonialContainer1>
        <StyledTestimonialContainer2></StyledTestimonialContainer2>
      </StyledTestimonialsContainer>
      <StyledTestimonialTitle color="white">
            TESTIMONIALS
        </StyledTestimonialTitle>
    </StyledAboutSectionContainer>
  );
};

export default AboutSection;
