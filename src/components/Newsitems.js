import React from "react";
const Newsitems = (props) => {
  let { title, description, imageUrl, nextPAgeUrl, author, date, source } =
    props;
  return (
    <div className="container">
      <div className="card my-2">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ zIndex: "1", left: "89%" }}
        >
          {source}
        </span>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2n2EqVjZvJ4Qp1kAKpWO9GBgbZnLEUnYxg&usqp=CAU"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={nextPAgeUrl}
            target="_blank"
            className="btn btn-sm btn-dark "
          >
            Read more...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitems;
