
import Contact from "../contact/contact.component";
import NavBar from "../nav-bar/nav-bar.component";
import { FooterContainer } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Contact/>
      <NavBar />
    </FooterContainer>
  );
};

export default Footer;
