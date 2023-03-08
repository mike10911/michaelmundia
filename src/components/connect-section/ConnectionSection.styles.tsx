import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../lib/colors";
import { H1 } from "../../lib/typography";

export const ConnectSectionContainer = styled.div`
  text-align: center;
`;

export const ConnectSectionTitle = styled(H1)`
  padding-top: 1.5em;
  letter-spacing: 0.2rem;
`;

export const ConnectBoxContainer = styled.div`
  width: 55em;
  height: 10em;
  background-color: ${colors.ORANGE};
  border-radius: 100px;
  margin: 0 auto;
  margin-top: 5em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const SocialIcon = styled(motion.a)`
  color: ${colors.WHITE};
`;
