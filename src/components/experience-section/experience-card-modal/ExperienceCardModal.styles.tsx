import styled from "styled-components";
import { colors } from "../../../lib/colors";

export const ExperienceCardModalOverlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  zindex: 1000;
`;

export const ExperienceCardModalConatiner = styled.div`
  background-color: ${colors.WHITE};
  height: 60em;
  width: 50em;
  border-radius: 60px;
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  zindex: 1000;
`;
