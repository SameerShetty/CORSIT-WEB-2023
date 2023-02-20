import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
function Card(props) {
  return (
    <div className="col-md-4 col-10 d-flex align-items-center justify-content-center">
      <div
        className="card shadow-lg p-3 mb-5 bg-white rounded"
        style={{ width: "90%" }}
      >
        <img
          className="card-img-top"
          src={props.detail.img}
          alt="Card image cap"
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
