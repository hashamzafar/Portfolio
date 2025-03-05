import { Row, Col } from "react-bootstrap";

const Bio = () => {
  return (
    <>
      <div className="bio-bg  " id="bio">
        <Row className="col-bg d-flex ">
          <Col style={{}} md={3} className="ml-5 bio-intro">
            <div className="">
              <img src="../assets/hz-logo.png" alt=" HZ" className="logo-img" />
              <div class="wave-container">
                <h1 class="wave-text">
                  <text>Hasham Zafar</text>
                </h1>
              </div>
            </div>

            <h4 className="info justify-content-center d-flex">
              MERN Developer
            </h4>
          </Col>
          <Col />

          <Col md={6}>
            <div className="bio-text ">
              <h4>Developer by day. Blogger by night.</h4>
              <p className="">
                I am a passionate Full-Stack Developer who thrives on solving
                complex problems and creating seamless digital experiences. With
                a strong foundation in both front-end and back-end development,
                I enjoy bridging the gap between visual design and technical
                implementation. My approach is hands-on, detail-oriented, and
                driven by a continuous desire to learn and improve. I work well
                both independently and as part of a team, always eager to
                collaborate, share knowledge, and grow alongside my peers. Code
                reviews are one of my favorite aspects of development—I see them
                as an opportunity to learn, refine my skills, and ensure
                high-quality, maintainable code. What truly motivates me is the
                challenge of turning ideas into reality through clean,
                efficient, and scalable code. I embrace best practices, keep up
                with the latest technologies, and thrive in dynamic environments
                where I can push boundaries and innovate. Whether I’m refining
                UI interactions, optimizing performance, or architecting backend
                solutions, my focus is always on creating intuitive,
                high-performing applications. For me, every project is an
                opportunity to expand my knowledge and contribute meaningfully
                to the tech community.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Bio;
