import { Navbar, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
const NavBar = () => {
  // const [color, setColor] = useState("black")
  const [colorBlack, setColorBlack] = useState(true);
  const [colorWhite, setColorWhite] = useState(false);
  const [colorGreen, setColorGreen] = useState(false);
  const changeNavbarColor = () => {
    // if (window.scrollY <= 700) {
    //   setColorBlack(true) && setColorWhite(false) && setColorGreen(false);
    // } else if (window.scrollY >= 700 && window.scrollY <= 1640) {
    //   setColorWhite(true) && setColorBlack(false) && setColorGreen(false);
    // } else {
    //   setColorGreen(true) && setColorBlack(false) && setColorWhite(false);
    // }
    if (window.scrollY >= 650) {
      setColorWhite(true);
      //  }else if(window.scrollY >= 100){
      //    setColorGreen(true);
      //  }else if(window.scrollY >= 10){
      //   setColorGreen(true);
    } else {
      setColorWhite(false);
    }
  };

  // useEffect(() => {

  // }, [window.scrollY]);
  window.addEventListener("scroll", changeNavbarColor);

  console.log(window.scrollY);
  return (
    <Navbar
      expand="lg"
      className={
        // `navbar fixed-top color${col}`
        colorWhite
          ? "navbar colorChange fixed-top navbar-dark"
          : // : colorGreen
            // ? "navbar fixed-top colorGreen"
            "navbar fixed-top "
      }
    >
      <Navbar.Brand href="#home">
        <img src="../assets/hat-hz.png" alt=" HZ" width={50} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="nav-setting" href="#jumbo">
            Home
          </Nav.Link>
          <Nav.Link className="nav-setting" href="#bio">
            Bio
          </Nav.Link>
          <Nav.Link href="#certifications">Certifications</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
