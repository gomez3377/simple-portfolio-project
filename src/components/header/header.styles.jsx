import styled from "styled-components";
import { device } from "../../screen-sizes";

export const HeaderContainer = styled.header`
  background-color: ${({ theme: { colors } }) => colors.nearBlack};
  position: relative;
  margin: 0 auto;
  max-width: 1110px;

  nav {
    position: absolute;
    width: 1080.49px;
    margin-top: 39px;
    z-index: 1;
  }

  @media ${device.tablet} {
    max-width: 708.49px;
    nav {
      width: 100%;
    }
  }

  @media ${device.mobile} {
    max-width: 343px;
    nav {
      width: 153.99px;
        left:50%;
        transform: translateX(-50%);
      margin-top: 20px;
    }
  }
`;

export const Hero = styled.div`
  position: relative;
  height: 720px;
  margin-bottom: 104px;
  @media ${device.tablet} {
    height: 600px;
    margin-bottom: 60px;
    width: 100%;
  }

  @media ${device.mobile} {
    height: 667px;
  }
`;
export const BioContainer = styled.div`
  top: 127px;
  width: 706px;
  position: absolute;
  z-index: 1;
  h1 {
    margin-bottom: 43px;
    span {
      border-bottom: 6px solid ${({ theme: { colors } }) => colors.green};
    }
  }
  p {
    width: 445px;
    margin-bottom: 66px;
  }
  @media ${device.tablet} {
    width: 445px;
    top: 151px;
    left: 0;
    h1 {
      margin-bottom: 66px;
    }
    p {
      margin-bottom: 34px;
    }
  }

  @media ${device.mobile} {
    top: 423px;
    width: 343px;
    text-align: center;
    p {
      width: 100%;
    }
  }
`;
