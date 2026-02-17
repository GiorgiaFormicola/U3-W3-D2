import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const SFFooter = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-light bg-opacity-25" data-bs-theme="dark" fixed="bottom">
      <Container fluid>
        <Nav className="mx-auto">
          <Nav.Link href="#navbar" className="active">
            Go to top
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default SFFooter;
