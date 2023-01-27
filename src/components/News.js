import React, { useEffect, useState } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=23625d4bdd4043fd9a2adcc49be80736&page=${page}&pageSize=${props.pageSize}`;
    setLoading({ loading: true });
    props.setProgress(30);
    let data = await fetch(url);
    let parsData = await data.json();
    props.setProgress(70);
    setArticles(parsData.articles);
    setTotalResults(parsData.setTotalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const capitalized = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `DailyNews-${capitalized(props.category)}`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=23625d4bdd4043fd9a2adcc49be80736&page=${page + 1}&pageSize=${
      props.pageSize
    }`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsData = await data.json();
    setArticles(articles.concat(parsData.articles));
    setTotalResults(parsData.totalResults);
  };

  return (
    <div className="container">
      <h2
        className="text-center"
        style={{
          backgroundColor: "#2d3436",
          color: "white",
          borderRadius: "4px",
          marginTop: "65px",
          padding: "2px 0px 8px",
        }}
      >
        Daily-News - Top News and Updates
      </h2>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitems
                  title={element.title ? element.title.slice(0, 40) : "Demo"}
                  description={
                    element.description
                      ? element.description.slice(0, 80)
                      : "This is Demo"
                  }
                  imageUrl={element.urlToImage}
                  nextPAgeUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  counrty: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  counrty: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
