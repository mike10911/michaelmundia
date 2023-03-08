import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../lib/colors";
import { H1 } from "../../lib/typography";

export const ConnectSectionContainer = styled.div`
  text-align: center;
  margin-top: 20em;
  height: 30em;
  width: 70em;
  background-color: ${colors.PARCHMENT};
  margin: 0 auto;
  margin-top: 30em;
  border-radius: 60px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
  

`;

export const ConnectSectionTitle = styled(H1)`
  letter-spacing: 0.2rem;
  padding-top: 1.2em;
`;

export const ConnectBoxContainer = styled.div`
  width: 55em;
  height: 10em;
  background-color: ${colors.LIGHT_GREEN};
  border-radius: 100px;
  margin: 0 auto;
  margin-top: 5em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;
export const SocialIcon = styled(motion.a)`
  color: ${colors.PARCHMENT};
`;
