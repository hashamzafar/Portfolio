import {Jumbotron} from "react-bootstrap"
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import "./main.css"
import {FaReact, FaNode, FaHtml5, FaSass, FaCss3} from "react-icons/fa"
import {SiMongodb, SiExpress, SiPostgresql, SiJavascript,SiBootstrap } from "react-icons/si"
const Main =()=>{
    return(
      <>
      {/* <img src="../../assets/photo.jpg" alt="" /> */}
        <Jumbotron className="background" id="jumbo">
   <div className="bg-text mt-5 p-5 ">
        <h1 className="">Full-Stack Web Developer/ React Developer</h1>
        <hr />
        <p>
        As a fully motivated full stack developer, I am ready to pave my way in all areas of this field and explore visual design and technical implementation with a well built team. My core goal is to learn from all aspects 
        and explicitly deliver  details on how the application looks and works.         </p>
               <div className="justify-content-center d-flex">
        
         <SiMongodb className="icon-mongo"/> 
         <SiExpress className="icon-express"/>
         <FaReact className="icon-react"/>
         <FaNode className="icon-node"/>
       </div>
       <div className="justify-content-center d-flex">
         <SiPostgresql className="icon-postg"/>
         <SiJavascript className="icon-js"/>
         <SiBootstrap className="icon-bs"/>
         <FaHtml5 className="icon-html"/>
         <FaCss3 className="icon-css"/>
         <FaSass className="icon-sass"/>
       </div>
       </div>

       </Jumbotron>
      </>
    )
}
export default Main