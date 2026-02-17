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
      <Card className="border-0 bg-black bg-opacity-25 overflow-hidden rounded-4" style={{ boxShadow: "0px 0px 1em 0em #404567" }}>
        <Row className="g-0">
          <Col lg={4}>
            <div
              style={{
                height: "20em",
                backgroundImage: `url(${props.article.image_url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Col>
          <Col lg={8}>
            <Card.Body className="h-100 d-flex flex-column">
              <div>
                <div className="gap-lg-3 d-flex flex-column flex-lg-row justify-content-between align-items-lg-center border-bottom border-light border-opacity-10 pb-lg-3">
                  <Card.Title className="mb-lg-0 border-last order-lg-first fs-3">{props.article.title}</Card.Title>

                  <p className="text-end mb-1 mb-lg-0 text-nowrap text-secondary-emphasis align-self-end">
                    {new Date(props.article.published_at).toDateString()}
                  </p>
                </div>
                <p className="text-secondary-emphasis mb-0 pt-1">
                  Written by
                  {props.article.authors.map((author, i) => {
                    return (
                      <span key={"author" + i} className=" text-light fs-6">
                        {" "}
                        {author.name}
                      </span>
                    );
                  })}
                </p>
              </div>

              <Card.Text className="flex-grow-1 align-content-center pt-2 pt-lg-0">{props.article.summary}...</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
export default SFSingleArticle;
