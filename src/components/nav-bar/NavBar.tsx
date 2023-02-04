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

const NavBar: React.FC = () => {
  return (
    <StyledNavBarContainer animate="animate">
      <StyledNavBarList>
        <StyledNavBarItem>
          <StyledNavLink href="#">ABOUT</StyledNavLink>
        </StyledNavBarItem>
        <StyledNavBarItem>
          <StyledNavLink href="#">SKILLS</StyledNavLink>
        </StyledNavBarItem>
        <StyledNavBarItem>
          <StyledNavLink href="#">EXPERIENCE</StyledNavLink>
        </StyledNavBarItem>
        <li>
          <StyledNavLink>
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
        <StyledNavBarItem2
          whileHover="hover"
          whileTap="tap"
          variants={buttonAnimations}
        >
          <StyledLink color={colors.WHITE} href="#">
            CONTACT
          </StyledLink>
        </StyledNavBarItem2>
      </StyledNavBarList>
    </StyledNavBarContainer>
  );
};

export default NavBar;
