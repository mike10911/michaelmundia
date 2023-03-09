import React from "react";
import { colors } from "../../lib/colors";
import { H1, StyledLink } from "../../lib/typography";
import { buttonAnimations } from "./NavBar.animations";
import {
  StyledNavBarContainer,
  StyledNavBarItem,
  StyledNavBarItem2,
  StyledNavBarList,
  StyledNavLink,
} from "./NavBar.styles";

import startup from "./startup.mp3";
import main from "./main.mp3";
import click from "./click.mp3";
const NavBar: React.FC = () => {
  const startupAudio = new Audio(startup);
  const mainMenuAudio = new Audio(main);
  const playAudio = () => {
    startupAudio.play();
    mainMenuAudio.loop = true;
    mainMenuAudio.play();
  };

  const clickAudio = new Audio(click);
  const playAudioClick = () => {
    clickAudio.play();
  };
  return (
    <StyledNavBarContainer animate="animate">
      <StyledNavBarList onClick={playAudioClick}>
        <StyledNavBarItem>
          <StyledNavLink href="/#about">ABOUT</StyledNavLink>
        </StyledNavBarItem>
        <StyledNavBarItem>
          <StyledNavLink href="/#skills">SKILLS</StyledNavLink>
        </StyledNavBarItem>
        <StyledNavBarItem>
          <StyledNavLink href="/#exp">EXPERIENCE</StyledNavLink>
        </StyledNavBarItem>
        <li>
          <StyledNavLink onClick={playAudio}>
            <H1 whileHover="hover" whileTap="tap" variants={buttonAnimations}>
              M
            </H1>
          </StyledNavLink>
        </li>
        <StyledNavBarItem>
          <StyledNavLink href="#">PROJECTS</StyledNavLink>
        </StyledNavBarItem>
        <StyledNavBarItem>
          <StyledNavLink href="#">RESUME</StyledNavLink>
        </StyledNavBarItem>
        <StyledNavBarItem>
          <StyledNavLink href="/#contact">CONTACT</StyledNavLink>
        </StyledNavBarItem>
      </StyledNavBarList>
    </StyledNavBarContainer>
  );
};

export default NavBar;
