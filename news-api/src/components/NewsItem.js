import React from 'react';

function NewsItem({titlealt,imageSrc,title,newsSummary,publishedAt}) {
    return (
        <>
        <div className="card" >
                  <img className="card-img-top" alt={titlealt} src={imageSrc}/>
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h4>{publishedAt}</h4>
                    <p id='news-summary'>{newsSummary}</p>
                  </div>
                </div>
        
        </>
    );
}

export default NewsItem;