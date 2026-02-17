import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const SFNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-light bg-opacity-25" data-bs-theme="dark" sticky="top" id="navbar">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="https://www.iconpacks.net/icons/2/free-rocket-icon-3432-thumb.png" height="30" alt="" />
          <span className="ms-2">SpaceFlight</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Homepage" className="active">
              Homepage
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default SFNavbar;
