import "./style.scss";
import {} from "swiper"
import { Carousel } from "react-bootstrap";

const Projects = ({projectsData}) => {

  return (
    <div className="page-wrap" id="projects">
      <div id="home-slider">
        <div className="swiper-container">
          <Carousel fade interval={2000} className="slide">
            {projectsData.map((cert, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 img"
                  src={cert.src}
                  alt={cert.alt || `Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default Projects;




// import "./style.scss";
// import {} from "swiper"
// const Projects = () => {

//   return (
//     <>
   
        
//         <div className="page-wrap">
//           <div id="home-slider"><h3>Major Project</h3>
//             <div className="swiper-container">
      
             
//             </div>
//           </div>
//         </div>
    
//     </>
//   );
// };
// export default Projects;
