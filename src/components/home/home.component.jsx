import Header from "../header/header.component";
import Experience from "../experience/experience.component";
import Projects from "../projects/projects.component";
import { HomeContainer } from "./home.style";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Experience />
      <Projects />
  
    </HomeContainer>
  );
};

export default Home;
