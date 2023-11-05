import React from "react";
import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

function News() {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("https://api.spaceflightnewsapi.net/v3/articles")
        .then((response) => response.json())
        .then((data) => {
          setNewsList(data);
        }).catch((error) => {

          setError(error);
      
        });;
    }, []);
    
 
  
  return (
    <>
      <div className="title">
        {" "}
        <h1>Space News</h1>
      </div>
      <div id="Error-div">{error ? <p>An error occurred: {error.message}</p> : null}</div>
      
      <div className="newsContainer">
        {newsList.map((val, key) => {
          return (
            <NewsItem
              titlealt={val.title}
              imageSrc={val.imageUrl}
              title={val.title}
              publishedAt={val.publishedAt}
              newsSummary={val.summary}
            />
          );
        })}
      </div>
    </>
  );
}

export default News;
