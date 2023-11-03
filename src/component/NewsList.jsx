import { styled } from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItems";
import Loading from "./Loading";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100px;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(category);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "all" : `category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=418c731af55742348d88b304b44bd5aa`
        );
        if (response.data.status === "ok") setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData(); // 함수 호출해줌
  }, [category]); // 서버 다녀오기
  if (loading) {
    return <Loading />;
  }
  return (
    <NewsListBlock>
      {articles &&
        articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
    </NewsListBlock>
  );
};
export default NewsList;
