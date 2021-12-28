import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="" expand="lg" className="nav">
      <Navbar.Brand href="#home">Hasham Zafar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
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
