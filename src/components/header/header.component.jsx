import React from "react";
import Button from "../button/button.component";
import NavBar from "../nav-bar/nav-bar.component";
import ProfileImage from "../profile-image/profile-image.component";

const Header = () => {
  return (
    <header>
      <NavBar/>
      <div className="bio">
        <h1>Nice to meet you! I'm Adam Keyes.</h1>
        <p>
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <Button>Contact Me</Button>
      </div>
      <ProfileImage/>
    </header>
  );
};

export default Header;
