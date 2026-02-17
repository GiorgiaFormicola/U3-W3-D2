import { Row, Col, Spinner } from "react-bootstrap";
const SFLoading = () => {
  return (
    <Row className="justify-content-center">
      <Col xl={10} className=" d-flex justify-content-center gap-2">
        <Spinner animation="grow" variant="light" style={{ height: "1.5em", width: "1.5em" }} />
        <Spinner animation="grow" variant="light" style={{ height: "1.5em", width: "1.5em" }} />
        <Spinner animation="grow" variant="light" style={{ height: "1.5em", width: "1.5em" }} />
      </Col>
    </Row>
  );
};
export default SFLoading;
