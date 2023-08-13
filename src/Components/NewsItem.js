import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-4">
        <div className="card">
          <div style={{display:'flex',
        justifyContent:'flex-end',
        position:'absolute',
        right:'0'
           } }>
          <span className=" badge rounded-pill bg-primary" >
                {source}
              </span>
          </div>
       
          <img
            src={
              !imageUrl
                ? "https://media.nature.com/lw1024/magazine-assets/d41586-023-02310-4/d41586-023-02310-4_25606092.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
             
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-primary">
                By {!author ? "Unknown" : author} on
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-danger"
            >
              Read More ..
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
