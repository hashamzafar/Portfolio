import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Component/Navbar/NavBar";
import Main from "./Component/Main/Main";
import Bio from "./Component/Bio/Bio";
import Certifications from "./Component/Certifications/Certifications";
import Projects from "./Component/Projects/Projects";
import certificationsData from "./Data/certifications.json"
import projectsData from "./Data/projects.json"
import Footer from "./Component/Footer/Footer";
import Contact from "./Component/Contact/Contact";
function App() {
 
  return (
    <>
      <NavBar />
      <Main />
      <Bio />
      <Certifications certificationsData={certificationsData}/>
      <Projects projectsData={projectsData}/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
