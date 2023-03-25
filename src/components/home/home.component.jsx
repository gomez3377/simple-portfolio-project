import Header from "../header/header.component";
import Experience from "../experience/experience.component";
import Projects from "../projects/projects.component";
import Contact from "../contact/contact.component";
import Footer from "../footer/footer.component";
import { HomeContainer } from "./home.style";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
