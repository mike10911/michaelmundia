import React from "react";
import { colors } from "../../lib/colors";
import { PrimaryButtonProps } from "../../lib/types";
import { buttonAnimations } from "./PrimaryButton.animation";
import { StyledPrimaryButton } from "./PrimaryButton.styles";
import click from "./click.mp3";

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  // const clickAudio = new Audio(click);
  // const playAudio = () => {
  //   clickAudio.play();
  // };
  return (
    <a
      // onClick={playAudio}
      href={props.btnLink}
      target={props.newTab ? "_blank" : "_self"}
    >
      <StyledPrimaryButton
        // whileHover="hover"
        // whileTap="tap"
        // variants={buttonAnimations}
        primaryColor={props.primaryColor}
        secondaryColor={props.secondaryColor}
        onClick={props.onClick}
      >
        {props.btnText}
      </StyledPrimaryButton>
    </a>
  );
};

export default PrimaryButton;
