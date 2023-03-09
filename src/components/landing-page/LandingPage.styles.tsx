import styled from "styled-components";
import { colors } from "../../lib/colors";
import { H1, H2 } from "../../lib/typography";

const StyledLandingContainer = styled.div``;

const StyledNameTitleContainer = styled.div`
  background-color: ${colors.PARCHMENT};
  height: 25rem;
  margin-right: 15%;
  margin-left: 15%;
  margin-top: 7rem;
  border-radius: 60px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
  margin-top: 15rem;
`;
const StyledName = styled(H1)``;
const StyledM = styled(H1)`
  font-size: 20rem;
  font-weight: 300;
`;

const StyledNameContainer = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled(H2)`
  text-align: center;
  margin-top: -1rem;
  letter-spacing: 0.2rem;
  margin-left: 1rem;
 
`;

export {
  StyledLandingContainer,
  StyledNameTitleContainer,
  StyledName,
  StyledM,
  StyledNameContainer,
  StyledTitle,
};
