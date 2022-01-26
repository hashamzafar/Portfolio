import { Carousel, Row, Col, Card } from "react-bootstrap";

const Certifications = () => {
  return (
    <>
      {/* <div className="section-bg"> */}
      <div className="page-wrap">
        <div id="home-slider">
          <div className="swiper-container">
            {/* <Row className=" container d-flex justify-content-space-between "> */}
              {/* <Col sm={6} md={4} lg={2} className="mt-5">
          <Card style={{ width: "20vw" }} className="card-col ">
            <Card.Body >
               <div className="justify-content-center d-flex">
            <img src="../assets/hat-hz.png" alt=" HZ" /></div>
              <Card.Title className="justify-content-center d-flex mt-5">Journey at Strive</Card.Title>
              <Card.Subtitle className="mb-2 text-muted justify-content-center d-flex">
                Beginning of coding Journey
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col> */}
              {/* <Col md={1}/> */}
              {/* <Col sm={12} md={12} lg={12}className=""> */}
              <Carousel
                fade
                id="certifications"
                interval={1000}
                className="slide"
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100 img"
                    src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-4d592d87-7e52-467d-b2bb-f4dd0516f24d.svg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img"
                    src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-2b915dc9-8f1c-4402-aa01-183d4ba6847a.svg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img"
                    src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-c6caabd6-0bc1-4e34-85c4-9469e60656fa.svg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img"
                    src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-98139d18-acbb-464e-a22d-128499162a11.svg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img"
                    src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-461c1159-c1b4-486f-913c-f2d620f56dc6.svg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img"
                    src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-3c6fb88c-6001-4ac3-bc75-2ee0fa630fb4.svg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img"
                    src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-a82d4415-73bd-4e6b-975e-16ad010ce4a0.svg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img"
                    src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-5326b695-96c7-4416-87d5-b8150d960a83.svg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img"
                    src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-6879e948-4348-4c06-ac2f-23e629429892.svg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              {/* </Col> */}
            {/* </Row> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
