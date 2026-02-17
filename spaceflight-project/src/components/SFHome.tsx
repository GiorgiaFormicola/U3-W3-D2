import { Row } from "react-bootstrap";
import SFSingleArticle from "./SFSingleArticle";
import { useEffect, useState } from "react";
import type { ArticlesData } from "../types/ArticlesData";
import { useNavigate } from "react-router-dom";

const articlesURL = "https://api.spaceflightnewsapi.net/v4/articles";

const SFHome = () => {
  const [articlesData, setArticlesData] = useState<null | ArticlesData>(null);
  const navigate = useNavigate();
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
        navigate("/404");
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <Row className="g-5 g-lg-4 py-4">
        {articlesData && (
          <>
            {articlesData.results.map((article) => (
              <SFSingleArticle article={article} key={article.id}></SFSingleArticle>
            ))}
          </>
        )}
      </Row>
    </>
  );
};
export default SFHome;
