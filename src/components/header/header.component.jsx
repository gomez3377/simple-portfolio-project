import React from "react";
import Button from "../button/button.component";
import NavBar from "../nav-bar/nav-bar.component";
import ProfileImage from "../profile-image/profile-image.component";
import {HeaderContainer, Hero, BioContainer } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <NavBar />
      <Hero>
        <BioContainer>
          <h1>Nice to meet you! I'm <span>Adam Keyes</span>.</h1>
          <p>
            Based in the UK, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <Button>Contact Me</Button>
        </BioContainer>
        <ProfileImage />
      </Hero>
    </HeaderContainer>
  );
};

export default Header;
