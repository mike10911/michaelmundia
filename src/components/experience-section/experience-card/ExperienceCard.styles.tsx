import styled from "styled-components";
import { colors } from "../../../lib/colors";
import { ExperienceCardContainerProps } from "../../../lib/types";
import { H2 } from "../../../lib/typography";
import PrimaryButton from "../../primary-button/PrimaryButton";


export const ExperienceCardContainer = styled.div<ExperienceCardContainerProps>`
    background-color: ${(props) => props.backgroundColor};
    height: 28em;
    width: 50em;
    border-radius: 60px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);  
    color: ${(props) => props.color ? props.color : colors.WHITE}; 
    margin: 0 auto;
    margin-top: 0em;
    padding-bottom: 2em;

    
`
export const StyledExperienceCardImage = styled.img`
   padding-top: 4em;
`

export const StyledExperienceCardTitle = styled(H2)`
    text-align: center;
    letter-spacing: 0.2rem;
    font-size: 28px;
    padding-bottom: 0.5em;
    color: ${(props) => props.color ? props.color : colors.WHITE};
`



