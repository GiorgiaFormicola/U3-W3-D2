import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

const SFNavbar = () => {
  const location = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" sticky="top" style={{ backgroundColor: "#404567" }}>
      <Container fluid>
        <Navbar.Brand href="https://spacenews.com/">
          <img src="https://www.iconpacks.net/icons/2/free-rocket-icon-3432-thumb.png" height="50" alt="" />
          <span className="ms-2">SpaceFlight</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Homepage
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default SFNavbar;
