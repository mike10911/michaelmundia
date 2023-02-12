import styled from "styled-components";
import { colors } from "../../lib/colors";
import { H1, H2 } from "../../lib/typography";


const StyledAboutSectionContainer = styled.div`
    background-color: ${colors.LIGHT_GREEN};
    margin-left: 5%;
    margin-right: 5%;
    height: 100em;
    margin-top: 12em;
    border-radius: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
`
const StyledAboutSectionTitle = styled(H1)`
    text-align: center;
    padding-top: 1.5em;
    letter-spacing: 0.2rem;
`
const StyledTestimonialContainer1 = styled.div`
    background-color: ${colors.WHITE};
    border-radius: 60px;
    width: 65%;
    height: 25em;
    margin-top: 62em;
    margin-left: 3em;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
`

const StyledTestimonialContainer2 = styled.div`
    background-color: ${colors.WHITE};
    border-radius: 60px;
    width: 35%;
    height: 45em;
    margin-top: 42.3em;
    margin-right: 3em;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);    
`
const StyledTestimonialsContainer = styled.div`
    display: flex;
    gap: 3rem;
    `;
const StyledTestimonialTitle = styled(H2)`

    letter-spacing: 3.1rem;
    margin-left: 3rem;
    margin-top: -44.5rem;
    font-size: 3.5rem;
   
  `;

export { StyledAboutSectionContainer, StyledAboutSectionTitle, StyledTestimonialContainer1, StyledTestimonialContainer2, StyledTestimonialsContainer, StyledTestimonialTitle};