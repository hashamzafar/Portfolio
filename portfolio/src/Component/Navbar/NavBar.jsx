import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useState } from "react";
const NavBar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 20){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);

  return (
    
    <Navbar  expand="lg"className={colorChange ? 'navbar colorChange fixed-top ' : 'navbar fixed-top navbar-dark'} >
      <Navbar.Brand href="#home">Hasham Zafar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Bio</Nav.Link>
          <Nav.Link href="#link">Works</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
         
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>


    
    
  );
};

export default NavBar;
