import "./style.scss";
import {} from "swiper";
import { Carousel } from "react-bootstrap";

const Projects = ({ projectsData }) => {
  return (
    <div className="page-wrap" id="projects">
      <div id="home-slider">
        <h3 className="d-flex justify-content-center  slider-title">
          My Recent Project
        </h3>
        <div className="swiper-container">
          <Carousel fade interval={2000} className="slide">
            {projectsData.map((cert, index) => (
              <Carousel.Item key={index} className="carousel-item">
                <p className="d-flex justify-content-center title">
                  {cert.title}
                </p>
                <img
                  className="d-flex w-100  img-project"
                  src={cert.image}
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
