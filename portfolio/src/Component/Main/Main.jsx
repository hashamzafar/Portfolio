import { Jumbotron } from "react-bootstrap";
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import "./main.css"
import { FaReact, FaNode, FaHtml5, FaSass, FaCss3 } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiJavascript,
  SiBootstrap,
} from "react-icons/si";
import "./main.css";
const Main = () => {
  return (
    <>
      {/* <img src="../../assets/photo.jpg" alt="" /> */}
      <Jumbotron className="background mb-0" id="jumbo">
        <div className="bg-text  p-5 ">
          <h1 className="">Full-Stack Web Developer/ React Developer</h1>
          <hr />
          <p>
            As a highly motivated full-stack developer, I am eager to explore
            every aspect of this field, from visual design to technical
            implementation. I thrive in both independent and collaborative
            environments, ensuring efficiency and seamless execution in every
            project. My goal is to craft user-friendly experiences while paying
            close attention to both functionality and aesthetics.
          </p>
          <div className="justify-content-center d-flex">
            <SiMongodb className="icon-mongo" />
            <SiExpress className="icon-express" />
            <FaReact className="icon-react" />
            <FaNode className="icon-node" />
          </div>
          <div className="justify-content-center d-flex">
            <SiPostgresql className="icon-postg" />
            <SiJavascript className="icon-js" />
            <SiBootstrap className="icon-bs" />
            <FaHtml5 className="icon-html" />
            <FaCss3 className="icon-css" />
            <FaSass className="icon-sass" />
          </div>
        </div>
      </Jumbotron>
    </>
  );
};
export default Main;
