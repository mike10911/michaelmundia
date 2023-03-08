
import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { H1 } from '../../lib/typography'


const SkillsSectionContainer = styled.section`
    background-color: ${colors.LIGHT_GREEN};
    height: 60em;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 20em;
    border-radius: 30px;
`
const StyledSkillsSectionTitle = styled(H1)`
    text-align: center;
    padding-top: 1em;
    letter-spacing: 0.2rem;
`

const StyledTabContainer = styled.div`
    height: 5em;
    border-radius: 60px;
    background-color: ${colors.WHITE};
    margin-top: 2.2em;
    margin-left: 5%;
    margin-right: 5%;
`
const StyledContentContainer = styled.div`
    height: 40em;
    border-radius: 60px;
    background-color: ${colors.WHITE};
    margin-top: 2.2em;
    margin-left: 5%;
    margin-right: 5%;
`

export {SkillsSectionContainer, StyledSkillsSectionTitle, StyledTabContainer, StyledContentContainer}