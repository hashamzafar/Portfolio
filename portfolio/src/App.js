import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Component/Navbar/NavBar";
import Main from "./Component/Main/Main";
import Bio from "./Component/Bio/Bio";
import Certifications from "./Component/Certifications/Certifications";
import Projects from "./Component/Projects/Projects";
function App() {
  return (
    <div className="App">
      <NavBar />

      <Main />
      <Bio />
      <Certifications />
      <Projects />
    </div>
  );
}

export default App;
