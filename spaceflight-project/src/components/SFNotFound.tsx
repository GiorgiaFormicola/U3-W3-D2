import { Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const SFNotFound = () => {
  return (
    <Row className="justify-content-center">
      <Col xl={10}>
        <Alert className="text-center">
          <Alert.Heading className="py-2">Oops! Something went wrong!</Alert.Heading>

          <hr />
          <div className="py-1">
            <p className="mb-1">Were're sorry!</p>
            <p className="mb-0">
              Go back to <span> </span>
              <Link to="/" className="text-primary-emphasis fw-bold text-decoration-none">
                homepage
              </Link>
              <span> </span>and try again.
            </p>
          </div>
        </Alert>
        ;
      </Col>
    </Row>
  );
};

export default SFNotFound;
