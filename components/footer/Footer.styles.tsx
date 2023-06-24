import styled from "styled-components";
import { colors } from "../../lib/colors";
import { H1 } from "../../lib/typography";

export const FooterContainer = styled.footer`
  background-color: ${colors.LIGHT_GREEN};
  border-radius: 100px 100px 0 0;
  height: 22em;
  margin-top: 20em;
  text-align: center;
`;
export const StyledMFooter = styled(H1)`
  font-size: 10rem;
  font-weight: 300;
  color: ${colors.PARCHMENT};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 4em;
  
`;
