import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl,author, publishedAt,source} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imgUrl
                ? "https://img.etimg.com/thumb/msid-94893842,width-1070,height-580/photo.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <span className="badge text-bg-warning">{source}</span>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author?author:'unknown'} on {new Date(publishedAt).toGMTString()}</small></p>

            <a
              href={newsUrl}
              rel="noreferrer" 
              target="_blank"
              className="btn  btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
 