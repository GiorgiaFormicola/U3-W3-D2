import { Container, Row } from "react-bootstrap";
import SFSingleArticle from "./SFSingleArticle";
import { useEffect, useState } from "react";
import type { ArticlesData } from "./types/ArticlesData";

const articlesURL = "https://api.spaceflightnewsapi.net/v4/articles";

const SFHome = () => {
  const [articlesData, setArticlesData] = useState<null | ArticlesData>(null);
  const getArticles = () => {
    fetch(articlesURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in getting the articles");
        }
      })
      .then((data) => {
        console.log(data);
        setArticlesData(data);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Container fluid="lg" className="pb-4">
      <Row className="g-5 g-lg-4 my-1">
        {articlesData && (
          <>
            {articlesData.results.map((article) => (
              <SFSingleArticle article={article} key={article.id}></SFSingleArticle>
            ))}
          </>
        )}
      </Row>
    </Container>
  );
};
export default SFHome;
