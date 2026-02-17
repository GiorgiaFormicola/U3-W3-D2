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
      className="border-top border-seocndary"
    >
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
