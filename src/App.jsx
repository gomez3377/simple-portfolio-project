import Home from "./components/home/home.component";
import { GlobalStyle } from "./assets/styles/global.styles";
import { Theme } from "./assets/styles/themes.styles";

function App() {
  return (
    <div className="App">
      <Theme>
      <GlobalStyle/>
      <Home />
      </Theme>
    </div>
  );
}

export default App;
