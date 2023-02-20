import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
function Card(props) {
  return (
    <div className="col-md-4 col-10 d-flex align-items-center justify-content-center">
      <div
        className="card shadow-lg p-3 mb-5 bg-white rounded"
        style={{ width: "90%" }}
      >
        <LazyLoadImage
          className="card-img-top"
          alt="Card image cap"
          effect="blur"
          style={{ width: "100%", objectFit: "cover" }}
          src={props.detail.img}
        />

        <div className="card-body">
          <h5 className="card-title">
            {props.detail.name.toString().toUpperCase()}
          </h5>
          <h4>
            {props.detail.year} year,
            {props.detail.branch.toString().toUpperCase()}{" "}
          </h4>
          <h5>TECH :</h5>
          <p className="card-text">
            {props.detail.tech.toString().toUpperCase()}
          </p>
        </div>
        <div
          className="card-footer d-flex align-items-center justify-content-around"
          style={{ backgroundColor: "transparent" }}
        >
          <a href={props.detail.linkedIn} target={"_blank"} rel="noreferrer">
            <FaLinkedinIn
              style={{
                fontSize: "2rem",
                color: "#00abb3",
              }}
            />
          </a>
          <a href={props.detail.git} target={"_blank"} rel="noreferrer">
            <FaGithub
              style={{
                fontSize: "2rem",
                color: "#00abb3",
              }}
            />
          </a>
          <a href={props.detail.insta} target={"_blank"} rel="noreferrer">
            <FaInstagram
              style={{
                fontSize: "2rem",
                color: "#00abb3",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
