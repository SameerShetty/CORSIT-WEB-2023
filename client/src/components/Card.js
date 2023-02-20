import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
function Card(props) {
  return (
    <div className="col-md-4 col-10 d-flex align-items-center justify-content-center">
      <div
        className="card shadow-lg p-3 mb-5 bg-white rounded"
        style={{ width: "90%" }}
      >
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ width: "100%" }}
        >
          <LazyLoadImage
            className="card-img-top "
            alt="Card image cap"
            effect="black-and-white"
            style={{
              objectFit: "cover",
              width: "220px",
              aspectRatio: "1",
              borderRadius: "50%",
              margin: "auto",
            }}
            src={props.detail.img}
          />
        </div>

        <div className="card-body">
          <h5 className="card-title text-center">
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
          {props.detail.linkedIn.length > 5 && (
            <a href={props.detail.linkedIn} target={"_blank"} rel="noreferrer">
              <FaLinkedinIn
                style={{
                  fontSize: "2rem",
                  color: "#00abb3",
                }}
              />
            </a>
          )}
          {props.detail.git.length > 5 && (
            <a href={props.detail.git} target={"_blank"} rel="noreferrer">
              <FaGithub
                style={{
                  fontSize: "2rem",
                  color: "#00abb3",
                }}
              />
            </a>
          )}
          {props.detail.insta.length > 5 && (
            <a href={props.detail.insta} target={"_blank"} rel="noreferrer">
              <FaInstagram
                style={{
                  fontSize: "2rem",
                  color: "#00abb3",
                }}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
