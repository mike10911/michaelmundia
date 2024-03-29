import styled from "@emotion/styled";
import { colors } from '../../lib/colors';
import { motion } from 'framer-motion';
import { StyledLink } from '../../lib/typography';


const StyledNavBarContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: rem;
    margin-top: 2rem;
    background-color: white;
    margin-left: 5%;
    margin-right: 5%;
    border-radius: 60px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.05); 
`
const StyledNavBarList = styled.ul`
    display: flex;
    list-style: none;
    gap: 5rem;

`
const StyledNavBarItem = styled.li`
    text-decoration: none;
    padding-top: 1.4rem;
    transition: 0.1s;
`
const StyledNavBarItem2 = styled.li`
    text-decoration: none;
    padding-top: 1.4rem;
    background-color: ${colors.ORANGE};
    border-radius: 3em;
    padding-left: 1rem;
    padding-right: 1rem;
    transition: 0.1s;
`
const StyledNavLink = styled(StyledLink)`
    transition: 0.5s;
    &:hover {
    color: ${colors.ORANGE};
  }
`

export { StyledNavBarContainer, StyledNavBarList, StyledNavBarItem, StyledNavBarItem2, StyledNavLink }
