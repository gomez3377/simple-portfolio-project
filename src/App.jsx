import Home from "./components/home/home.component";
import { GlobalStyle } from "./assets/styles/global.styles";
import { Theme } from "./assets/styles/themes.styles";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Theme>
      <GlobalStyle/>
   
      <Home />
     <Footer />
      </Theme>
    </div>
  );
}

export default App;
