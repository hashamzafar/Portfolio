import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./certifications.css"; // Stile personalizzato

const Certifications = ({ certificationsData }) => {
  return (
    <div className="container my-5" id="certifications">
      <div className="row align-items-center">
        {/* Sezione Immagini - Carousel */}
        <div className="col-md-6">
          <Carousel fade interval={2000} className="slide shadow-lg rounded">
            {certificationsData.map((cert, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 img-fluid"
                  src={cert.src}
                  alt={cert.alt || `Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Sezione Testo - Info */}
        <div className="col-md-6 text">
          <h2>Expand your network</h2>
          <div className="mt-3">
            <div className="mb-4">
              <h3>Tell your story with an About page.</h3>
              <p>
                Add an "About Me" page to your portfolio website to share your
                bio and tell your story. You can even display your resume or CV.
              </p>
            </div>
            <div className="mb-4">
              <h3>Let visitors get in touch through a contact page.</h3>
              <p>
                Make it easy for potential clients, employers, and collaborators
                to get in touch by including your email address or creating a
                form.
              </p>
            </div>
            <div className="mb-4">
              <h3>Reach your audience with email and social media tools.</h3>
              <p>
                Share new work directly with your audience using email
                campaigns. Add social media integrations to your site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;

// import { Carousel } from "react-bootstrap";

// const Certifications = ({certificationsData}) => {
//   return (
//     <div className="page-wrap" id="certifications">
//       <div id="home-slider">
//         <div className="swiper-container">
//           <Carousel fade interval={2000} className="slide">
//             {certificationsData.map((cert, index) => (
//               <Carousel.Item key={index}>
//                 <img
//                   className="d-block w-100 img"
//                   src={cert.src}
//                   alt={cert.alt || `Slide ${index + 1}`}
//                 />
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certifications;

// import { Carousel} from "react-bootstrap";

// const Certifications = () => {
//   return (
//     <>
//       <div className="page-wrap" id="certifications">
//         <div id="home-slider">
//           <div className="swiper-container">

//             <Carousel
//               fade
//               interval={1000}
//               className="slide"
//             >
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100 img"
//                   src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-4d592d87-7e52-467d-b2bb-f4dd0516f24d.svg"
//                   alt="Third slide"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100 img"
//                   src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-2b915dc9-8f1c-4402-aa01-183d4ba6847a.svg"
//                   alt="First slide"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100 img"
//                   src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-c6caabd6-0bc1-4e34-85c4-9469e60656fa.svg"
//                   alt="Second slide"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100 img"
//                   src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-98139d18-acbb-464e-a22d-128499162a11.svg"
//                   alt="Third slide"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100 img"
//                   src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-461c1159-c1b4-486f-913c-f2d620f56dc6.svg"
//                   alt="Third slide"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100 img"
//                   src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-3c6fb88c-6001-4ac3-bc75-2ee0fa630fb4.svg"
//                   alt="Third slide"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100 img"
//                   src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-a82d4415-73bd-4e6b-975e-16ad010ce4a0.svg"
//                   alt="Third slide"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100 img"
//                   src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-5326b695-96c7-4416-87d5-b8150d960a83.svg"
//                   alt="Third slide"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100 img"
//                   src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-6879e948-4348-4c06-ac2f-23e629429892.svg"
//                   alt="Third slide"
//                 />
//               </Carousel.Item>
//             </Carousel>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Certifications;
