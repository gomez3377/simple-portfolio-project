import styled from 'styled-components'
import { device } from '../../screen-sizes'


export const HomeContainer = styled.main`
background-color:${({theme:{colors}}) => colors.nearBlack};
padding-bottom:139px;

@media ${device.tablet} {
    padding-bottom:100px;
}


`