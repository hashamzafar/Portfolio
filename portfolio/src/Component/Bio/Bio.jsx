import { Row, Col } from "react-bootstrap";

const Bio = () => {
  return (
    <>
      <div className="bio-bg  " id="bio">
        <Row className="col-bg ">
          {/* <Col/> */}
          <Col style={{ width: "80vw" }} md={3} className="ml-5 bio-intro">
            {/* <h3 className="info">Home/About</h3> */}
            <div className="justify-content-center d-flex">
              <img src="../assets/hz-logo.png" alt=" HZ" />
            </div>
            {/* <h2 className="info justify-content-center d-flex"> */}
            <div className="patterns">
              <svg width="100" height="100">
                <defs>
                  <pattern
                    id="polka-dots"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                  </pattern>
                </defs>
                <text x="100%" y="60%" text-anchor="middle">
                  Hasham Zafar
                </text>
              </svg>
            </div>
            {/* Hasham Zafar */}
            {/* </h2> */}
            <h4 className="info justify-content-center d-flex">
              MERN Developer
            </h4>
          </Col>
          <Col />

          <Col md={6}>
            <div className="bio-text ">
              <h4>Developer by day. Blogger by night.</h4>
              <p className="">
                With a patient centred approach, I serve needs of the individual
                wants. The clinic environment has a balanced, relaxing and
                friendly ambiance with a clean professional feel. The office of
                dental practice in Malta is ideally located to serve patients
                from the surroundings areas, and many people travel from all
                over the country due to our reputation for the treatment of gum
                disease and dental implants. The clinic is situated over 2
                floors with the ground floor providing easy access for those
                with mobility issues. Emergency appointments are available as
                well as late nights and weekends. The minute you step through
                that door you are made to feel comfortable within a warm,
                friendly environment. Have a cup of tea or coffee whilst you
                complete your medical history forms prior to seeing the dentist.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Bio;
