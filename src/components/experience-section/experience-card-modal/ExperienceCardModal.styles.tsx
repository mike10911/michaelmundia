import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../../lib/colors";
import { H2, H3 } from "../../../lib/typography";

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
  width: 45em;
  height: 50em;
  border-radius: 60px;
  margin: 0 auto;
  position: fixed;
  top: 4vh;
  left: 0vw;
  right: 0vw;
  bottom: 0vh;
  padding: 50px;
  zindex: 1000;
  transform: translate(-50%, -50%);
`;

export const ModalBackButtonDiv = styled.div`
  position: absolute;
  bottom: 5%;
  left: 73%;
`;

export const ModalUpperSection = styled.div`
  display: flex;
`;

export const ModalImage = styled.img``;
export const TitleCompanyDiv = styled.div`
  padding-top: 0.5em;
  padding-left: 1em;
`;

export const DateLocationDiv = styled.div`
  padding-top: 1em;
  padding-left: 1em;
  margin-left: auto;
  text-align: right;
`;

export const ModalTitle = styled(H2)`
  font-size: 26px;
`;
export const ModalCompany = styled(H3)``;

export const ModalDate = styled(H3)``;
export const ModalLocation = styled(H3)``;

export const BulletPoints = styled.ul`
  list-style-type: disc;
  padding-top: 1em;
  padding-left: 1em;
  li {
    padding-top: 0.5em;
  }
`;
