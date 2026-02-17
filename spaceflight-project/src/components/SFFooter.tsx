import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const SFFooter = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      data-bs-theme="dark"
      sticky="bottom"
      style={{
        backgroundColor: "rgb(3 10 53 / 70%)",
        backdropFilter: "blur(20px)",
      }}
      className="border-top"
    >
      <Container fluid>
        <Nav className="mx-auto py-2 text-light text-opacity-75 text-center fw-light fst-italic">
          <div>
            <small className="mb-1">
              &copy; 2026 <span className="fw-bold fst-normal fs-6">SpaceFlight</span>
            </small>
            <br />
            <small className="mb-0">
              Powered by <span className="fw-bold fs-6">GF</span>
            </small>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default SFFooter;
