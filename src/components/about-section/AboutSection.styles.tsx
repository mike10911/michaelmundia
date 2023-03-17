import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../lib/colors";
import { H1, H2, P } from "../../lib/typography";

const StyledAboutSectionContainer = styled.div`
  background-color: ${colors.LIGHT_GREEN};
  margin-left: 5%;
  margin-right: 5%;
  height: 120em;
  margin-top: 12em;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
`;
const StyledAboutSectionTitle = styled(H1)`
  text-align: center;
  padding-top: 1.5em;
  letter-spacing: 0.2rem;
`;
const StyledTestimonialContainer1 = styled.div`
  background-color: ${colors.WHITE};
  border-radius: 60px;
  width: 65%;
  height: 25em;
  margin-top: 50em;
  margin-left: 3em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
`;

const StyledTestimonialContainer2 = styled.div`
  background-color: ${colors.WHITE};
  border-radius: 60px;
  width: 35%;
  height: 45em;
  margin-top: 30.5em;
  margin-right: 3em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
`;
const StyledTestimonialsContainer = styled.div`
  display: flex;
  gap: 3rem;
  
`;
const StyledTestimonialTitle = styled(H2)`
  letter-spacing: 3.1rem;
  margin-left: 3rem;
  margin-top: -44.5rem;
  font-size: 3.5rem;
`;
const AboutSectionContent = styled.div`
    margin-left: 3em;
    margin-right: 3em;
    display: flex;
    margin-top: 5em;


`;
const StyledNameTextContainer = styled.div``;
const StyledName = styled(H2)``;
const StyledAboutText = styled(P)`
    width: 90%;
    margin-right: -5em;
    max-height: 2em;
    line-height: 1.5;
`;

const StyledImageSocialsContainer = styled.div``;

const StyledAboutImage = styled.img`
    scale: 0.8;
    margin-top: -2em;
    margin-right: 1em;
    

`;
const StyledSocialsContainer = styled.div`
   
    justify-content: space-evenly;
    display: flex;
    align-items: center;
   

`;

const StyledAboutSocialIcon = styled(motion.a)`
  color: ${colors.PARCHMENT};
`;

export {
  StyledAboutSectionContainer,
  StyledAboutSectionTitle,
  StyledTestimonialContainer1,
  StyledTestimonialContainer2,
  StyledTestimonialsContainer,
  StyledTestimonialTitle,
  AboutSectionContent,
  StyledNameTextContainer,
  StyledName,
  StyledAboutText,
  StyledImageSocialsContainer,
  StyledAboutImage,
  StyledSocialsContainer,
  StyledAboutSocialIcon,
};
