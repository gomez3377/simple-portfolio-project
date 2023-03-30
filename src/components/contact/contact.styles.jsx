import styled from 'styled-components'
import { device } from '../../screen-sizes'


export const ContactSection = styled.section`
margin: 0 auto;
padding-top:84px;
padding-bottom: 92px;
border-bottom:1px solid white;
max-width: 1110px;
display:flex;
justify-content:space-between;
align-items:flex-start;

@media ${device.tablet}{
    padding-top:60px;
    max-width: 708px;
    display:block;
    text-align:center;
}
`

export const ContactInfo = styled.div`
width:445px;
h1{
    margin-bottom:36px;
}
@media ${device.tablet}{
    margin:0 auto;
}

`
