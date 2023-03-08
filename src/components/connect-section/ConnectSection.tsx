import React from "react";
import {
  ConnectBoxContainer,
  ConnectSectionContainer,
  ConnectSectionTitle,
  SocialIcon,
} from "./ConnectionSection.styles";
import { BsFillCameraFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { buttonAnimations } from "../primary-button/PrimaryButton.animation";
import { socialIconAnimations } from "./ConnectSection.animations";
import { colors } from "../../lib/colors";

const ConnectSection: React.FC = () => {
  return (
    <ConnectSectionContainer>
      <ConnectSectionTitle color={colors.PARCHMENT}>LET'S CONNECT!</ConnectSectionTitle>
      <ConnectBoxContainer>
        <SocialIcon
          variants={socialIconAnimations}
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          href="https://www.linkedin.com/in/michael-mundia/"
          target="_blank"
        >
          <BsLinkedin size="5rem" />
        </SocialIcon>
        <SocialIcon
          variants={socialIconAnimations}
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          href="https://github.com/mike10911"
          target="_blank"
        >
          <BsGithub size="5rem" />
        </SocialIcon>
        <SocialIcon
          variants={socialIconAnimations}
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          href="mailto:mikeymundia@gmail.com"
          target="_blank"
        >
          <MdMail size="5rem" />
        </SocialIcon>
        <SocialIcon
          variants={socialIconAnimations}
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          href="https://mikemundia.wordpress.com/"
          target="_blank"
        >
          <BsFillCameraFill size="5rem" />
        </SocialIcon>
      </ConnectBoxContainer>
    </ConnectSectionContainer>
  );
};

export default ConnectSection;
