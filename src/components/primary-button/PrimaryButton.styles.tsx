import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../lib/colors";
import { StyledPrimaryButtonProps } from "../../lib/types";

const StyledPrimaryButton = styled(motion.button)<StyledPrimaryButtonProps>`
  background-color: ${(props) =>
    props.secondaryColor ? props.secondaryColor : "transparent"};
  color: ${(props) =>
    props.primaryColor ? props.primaryColor : colors.LIGHT_GREEN};
  border-color: ${(props) =>
    props.primaryColor ? props.primaryColor : colors.LIGHT_GREEN};
  transition-duration: 0.5s;
  &:hover {
    color: ${(props) =>
      props.secondaryColor ? props.secondaryColor : colors.WHITE};
    background-color: ${(props) =>
      props.primaryColor ? props.primaryColor : colors.LIGHT_GREEN};
    border-color: ${(props) =>
      props.secondaryColor ? props.secondaryColor : colors.WHITE};
  }
  border-radius: 2em;
  border: 0.1em solid;
  cursor: pointer;
  font-size: 1.4em;
  text-decoration: none;
  text-align: center;
  padding-left: 2.5em;
  padding-right: 2.5em;
  padding-top: 0.7em;
  padding-bottom: 0.7em;
`;

const StyledCallToActionBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-top: 2rem;
`;
export { StyledPrimaryButton, StyledCallToActionBtnContainer };
