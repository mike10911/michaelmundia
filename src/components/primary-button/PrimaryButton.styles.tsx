import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../lib/colors";

const StyledPrimaryButton = styled(motion.button)`
  color: ${colors.DARK_GREEN};
  border-color: ${colors.DARK_GREEN};
  transition-duration: 0.5s;
  &:hover {
    color: ${colors.WHITE};
    background-color: ${colors.DARK_GREEN};
    border-color: ${colors.WHITE};
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
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.10); 
`;

const StyledCallToActionBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-top: 2rem;
`;
export { StyledPrimaryButton, StyledCallToActionBtnContainer };
