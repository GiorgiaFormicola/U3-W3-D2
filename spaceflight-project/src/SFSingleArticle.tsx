import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import type { Result } from "./types/ArticlesData";

interface SFSingleArticleProps {
  article: Result;
}

const SFSingleArticle = (props: SFSingleArticleProps) => {
  console.log(props.article);
  return (
    <Col xs={12} data-bs-theme="dark">
      <Card className="border-0 bg-black bg-opacity-25" style={{ boxShadow: "0px 0px 0.5em 0em white" }}>
        <Row className="g-0">
          <Col lg={4}>
            <Card.Img src={props.article.image_url} className="img-fluid rounded-end-0" />
          </Col>
          <Col lg={8}>
            <Card.Body className="h-100 d-flex flex-column">
              <div className="d-flex justify-content-between">
                <Card.Title>{props.article.title}</Card.Title>
                <p className="text-end">Date: {Date(props.article.published_at)}</p>
              </div>

              <Card.Text className="flex-grow-1 align-content-center">{props.article.summary}...</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
export default SFSingleArticle;
