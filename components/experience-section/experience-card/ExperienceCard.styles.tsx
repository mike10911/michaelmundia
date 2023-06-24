import styled from "styled-components";
import { colors } from "../../../lib/colors";
import { ExperienceCardContainerProps } from "../../../lib/types";
import { H2 } from "../../../lib/typography";
import PrimaryButton from "../../primary-button/PrimaryButton";
import Image from "next/image";


export const ExperienceCardContainer = styled.div<ExperienceCardContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    padding: 1em;
    height: 23em;
    width: 40em;
    border-radius: 60px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);  
    color: ${(props) => props.color ? props.color : colors.WHITE}; 
    margin: 0 auto;
`
export const StyledExperienceCardImage = styled.div`
   scale: 0.7;
   max-width:100%;
`

export const StyledExperienceCardTitle = styled(H2)`
    text-align: center;
    letter-spacing: 0.2rem;
    font-size: 25px;
    color: ${(props) => props.color ? props.color : colors.WHITE};
`



