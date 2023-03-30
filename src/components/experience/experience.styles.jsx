import styled from 'styled-components'
import { device } from '../../screen-sizes'
export const ExperienceContainer = styled.section`
margin: 0 auto;
max-width: 1110px;
border-top: 1px solid white;
display:grid;
grid-template-columns: repeat(3, 1fr);
padding-top: 72px;
margin-bottom:140px;
gap: 58px;

@media ${device.tablet}{
    max-width:708px;
    padding-top:60px;
    grid-template-columns: repeat(2, 1fr);


}
`