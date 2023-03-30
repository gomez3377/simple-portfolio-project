import styled from 'styled-components'
import { device } from '../../screen-sizes'


export  const NavBarContainer = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
@media ${device.mobile}{
    flex-direction:column;
    text-align:center;
    height:72px;
}

`