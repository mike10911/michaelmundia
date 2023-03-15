
import { motion } from "framer-motion";
import styled from "styled-components";
import { H1 } from "../../lib/typography";

const ExperienceSectionContainer = styled.div`
margin-top: 15em;
text-align: center;
`
const StyledExperienceCardContainer= styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding-left: 5em;
    padding-right: 5em;
    gap: 2em;
   

    

`

const StyledExperienceSectionTitle = styled(H1)`
    padding-top: 1.5em;
    letter-spacing: 0.2rem;
    padding-bottom: 2em;
`
const FigmaContainer = styled(motion.div)`
margin-top: 15em;
text-align: center;
gap: 2em;
padding-top: 2em;
padding-left: 3em;
padding-right: 3em;
`
const StyledDesignExperienceSectionTitle = styled(H1)`

    letter-spacing: 0.2rem;
    padding-bottom: 2em;
`

export const StyledFigmaEmbed = styled(motion.iframe)`
    margin: 2em;
    width: 45em;
    height: 30em;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border: 1px solid ;
    
`

export {ExperienceSectionContainer, StyledExperienceSectionTitle, FigmaContainer , StyledDesignExperienceSectionTitle, StyledExperienceCardContainer}