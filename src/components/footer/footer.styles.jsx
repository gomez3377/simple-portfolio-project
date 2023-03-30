import styled from "styled-components";
import { device } from "../../screen-sizes";

export const FooterContainer = styled.footer`
  background-color: ${({ theme: { colors } }) => colors.darkGray};
  padding-bottom: 92px;
  nav {
    margin: 0 auto;
    margin-top: 47px;
    max-width: 1110px;
  }
  @media ${device.tablet} {
    padding-bottom:40px;
    nav {
      max-width: 708px;
      margin-top:30px;
    }
  }
`;
