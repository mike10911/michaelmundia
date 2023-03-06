import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../../lib/colors";

export const ExperienceCardModalOverlay = styled(motion.div)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  zindex: 1000;
`;

export const ExperienceCardModalConatiner = styled(motion.div)`
  background-color: ${colors.WHITE};
  height: 50em;
  width: 40em;

  border-radius: 60px;
  margin: 0 auto;
  position: fixed;
  top: 5vh;
  left: 0vw;
  right: 0vw;
  bottom: 0vh;
  padding: 50px;
  zindex: 1000;
  transform: translate(-50%, -50%);
 
`;
