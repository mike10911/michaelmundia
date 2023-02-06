import React from "react";
import { colors } from "../../lib/colors";
import { PrimaryButtonProps } from "../../lib/types";
import { buttonAnimations } from "./PrimaryButton.animation";
import { StyledPrimaryButton } from "./PrimaryButton.styles";


const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <a href={props.btnLink} target={props.newTab ? '_blank' : '_self'}>
      <StyledPrimaryButton
        whileHover="hover"
        whileTap="tap"
        variants={buttonAnimations}
      >
        {props.btnText}
      </StyledPrimaryButton>
    </a>
  );
};

export default PrimaryButton;
