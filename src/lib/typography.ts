import styled from 'styled-components';
import { colors } from './colors';
import { motion } from 'framer-motion';

const fonts = {
  questrial: 'Questrial, sans-serif',
};

const H1 = styled(motion.h1)`
  font-family: ${fonts.questrial};
  font-weight: ligher;
  color: ${(props): string => (props.color ? props.color : colors.DARK_GREEN)};
  font-size: 64px;
  margin: 0;
`;

const H2 = styled.h2`
  font-family: ${fonts.questrial};
`;

const H3 = styled.h3`
    font-family: ${fonts.questrial};
`;

const H4 = styled.h4`
    font-family: ${fonts.questrial};
`;

const P = styled.p`
    font-family: ${fonts.questrial};
`;

const StyledLink = styled(motion.a)`
   {
    text-decoration: none;
    color: ${(props): string => (props.color ? props.color : colors.DARK_GREEN)};
    font-family: ${fonts.questrial};
  }
`;

export { H1, H2, H3, H4, P, fonts, StyledLink };