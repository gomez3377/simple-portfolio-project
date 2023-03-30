import styled from 'styled-components'
import {device} from '../../screen-sizes'


export const ProfileImageContainer = styled.img`
position:absolute;
top:0;
right:0;
width:445px;
height:720px;
z-index:0;
@media ${device.tablet}{
    width:322px;
    height:600px;
    object-fit: cover;
    right:-32px;
}

@media ${device.mobile}{
    width:174px;
    height:383px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    object-fit:cover;
}

`