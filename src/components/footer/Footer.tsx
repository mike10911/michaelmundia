import React from "react";
import { colors } from "../../lib/colors";
import { footerNavData } from "../../lib/data";
import { H3, StyledLink } from "../../lib/typography";
import { buttonAnimations } from "../nav-bar/NavBar.animations";
import PrimaryButton from "../primary-button/PrimaryButton";
import {
  ButtonContainer,
  FooterContainer,
  StyledMFooter,
} from "./Footer.styles";

export const about = document.querySelector('#exp');

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <StyledLink href="#">
        <StyledMFooter
          whileHover="hover"
          whileTap="tap"
          variants={buttonAnimations}
        >
          M
        </StyledMFooter>
      </StyledLink>
      <ButtonContainer>
        {footerNavData.map((item) => (
          <PrimaryButton
            btnText={item.btnText}
            btnLink={item.btnLink}
            primaryColor={colors.LIGHT_GREEN}
            secondaryColor={colors.PARCHMENT}
          />
        ))}
      </ButtonContainer>
      {/* <H3>
        © 2023 Made with  <span style={{ color: "red" }}> ❤ </span>  by {"Mike Mundia"}
      </H3> */}
    </FooterContainer>
  );
};

export default Footer;
