import { Row } from "react-bootstrap";
import SFSingleArticle from "./SFSingleArticle";
import { useEffect, useState } from "react";
import type { ArticlesData } from "../types/ArticlesData";
import { useNavigate } from "react-router-dom";
import SFLoading from "./SFLoading";

const articlesURL = "https://api.spaceflightnewsapi.net/v4/articles";

const SFHome = () => {
  const [articlesData, setArticlesData] = useState<null | ArticlesData>(null);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR", error);
        navigate("/404");
        setLoading(false);
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      {loading && <SFLoading></SFLoading>}

      {articlesData && (
        <Row className="g-5 g-lg-4 py-4">
          {articlesData.results.map((article) => (
            <SFSingleArticle article={article} key={article.id}></SFSingleArticle>
          ))}
        </Row>
      )}
    </>
  );
};
export default SFHome;
