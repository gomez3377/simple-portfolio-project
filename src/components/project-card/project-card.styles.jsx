import styled from 'styled-components'
import { device } from '../../screen-sizes'

export const ProjectCardContainer = styled.div`
width:540px;

img{
    width:100%;
}
.description{
    text-transform:uppercase;
    margin-top:20px;
    .language-list{

       width:223px;
        display:flex;
        justify-content:space-between;
    }
}

@media ${device.tablet}{
width:342px;

}

`

