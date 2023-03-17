import React from "react";
import {
  AboutSectionContent,
  StyledAboutImage,
  StyledAboutSectionContainer,
  StyledAboutSectionTitle,
  StyledAboutSocialIcon,
  StyledAboutText,
  StyledImageSocialsContainer,
  StyledName,
  StyledNameTextContainer,
  StyledSocialsContainer,
  StyledTestimonialContainer1,
  StyledTestimonialContainer2,
  StyledTestimonialsContainer,
  StyledTestimonialTitle,
} from "./AboutSection.styles";

import profile from "../../images/profile.png";
import { BsLinkedin, BsGithub, BsFillCameraFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { buttonAnimations } from "../nav-bar/NavBar.animations";

const AboutSection: React.FC = () => {
  return (
    <StyledAboutSectionContainer id="about">
      <StyledAboutSectionTitle color="white">ABOUT</StyledAboutSectionTitle>
      <AboutSectionContent>
        <StyledNameTextContainer>
          <StyledName color="white">HELLO, I'M MIKE</StyledName>
          <StyledAboutText color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor.
          </StyledAboutText>
        </StyledNameTextContainer>
        <StyledImageSocialsContainer>
          <StyledAboutImage src={profile}></StyledAboutImage>
          <StyledSocialsContainer>
            <StyledAboutSocialIcon
              variants={buttonAnimations}
              whileHover="hover"
              whileTap="tap"
              href="https://www.linkedin.com/in/michael-mundia/"
              target="_blank"
            >
              <BsLinkedin size="3rem" />
            </StyledAboutSocialIcon>
            
            <StyledAboutSocialIcon
              variants={buttonAnimations}
              whileHover="hover"
              whileTap="tap"
              href="mailto:mikeymundia@gmail.com"
              target="_blank"
            >
              <MdMail size="3rem" />
            </StyledAboutSocialIcon>
            <StyledAboutSocialIcon
              variants={buttonAnimations}
              whileHover="hover"
              whileTap="tap"
              href="https://github.com/mike10911"
              target="_blank"
            >
              <BsGithub size="3rem" />
            </StyledAboutSocialIcon>
            <StyledAboutSocialIcon
              variants={buttonAnimations}
              whileHover="hover"
              whileTap="tap"
              href="https://mikemundia.wordpress.com/"
              target="_blank"
            >
              <BsFillCameraFill size="3rem" />
            </StyledAboutSocialIcon>
          </StyledSocialsContainer>
        </StyledImageSocialsContainer>
      </AboutSectionContent>
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
