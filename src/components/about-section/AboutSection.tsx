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
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <StyledAboutSectionContainer id="about">
      <StyledAboutSectionTitle color="white">ABOUT</StyledAboutSectionTitle>
      <AboutSectionContent>
        <StyledNameTextContainer>
          <StyledName color="white">HELLO, I'M MIKE</StyledName>
          <StyledAboutText color="white">
            I am a highly motivated individual pursuing a combined major in
            computer science and theatre, with a unique blend of technical
            and creative skills that make me a valuable asset in any team or
            project. With a solid foundation in computer programming and web
            development, coupled with a deep appreciation for the arts, I bring
            a well-rounded perspective to everything I do. Currently, I am
            gaining practical experience as a Web Developer at HackBeanpot and a
            Software Developer Co-op at Wood Mackenzie, collaborating with
            diverse professionals to sharpen my technical skills and foster
            innovation.
            <br />
            <br />
            Looking forward, I am eager to secure a Summer 2024 internship that
            will enable me to continue developing my skills and contributing to
            impactful projects. If you are seeking a dynamic team member with a
            passion for technology and the arts, I would be thrilled to connect
            and explore potential opportunities.
          </StyledAboutText>
        </StyledNameTextContainer>
        <StyledImageSocialsContainer>
          <StyledAboutImage>
            <Image alt="mike" src={profile}/>
          </StyledAboutImage>
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
      {/* <StyledTestimonialsContainer>
        <StyledTestimonialContainer1></StyledTestimonialContainer1>
        <StyledTestimonialContainer2></StyledTestimonialContainer2>
      </StyledTestimonialsContainer>
      <StyledTestimonialTitle color="white">
        TESTIMONIALS
      </StyledTestimonialTitle> */}
    </StyledAboutSectionContainer>
  );
};

export default AboutSection;
