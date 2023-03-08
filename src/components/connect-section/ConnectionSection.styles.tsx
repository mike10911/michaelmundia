import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../lib/colors";
import { H1 } from "../../lib/typography";

export const ConnectSectionContainer = styled.div`
  text-align: center;
  margin-top: 20em;
  height: 30em;
  width: 70em;
  background-color: ${colors.LIGHT_GREEN};
  margin: 0 auto;
  margin-top: 30em;
  border-radius: 60px;
  

`;

export const ConnectSectionTitle = styled(H1)`
  letter-spacing: 0.2rem;
  padding-top: 1.2em;
`;

export const ConnectBoxContainer = styled.div`
  width: 55em;
  height: 10em;
  border-color: ${colors.PARCHMENT};
  border-style: solid;
  border-width: 0.3em;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 5em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const SocialIcon = styled(motion.a)`
  color: ${colors.PARCHMENT};
`;
