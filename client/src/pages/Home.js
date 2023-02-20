import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid">
      <div
        className="row align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-6 col-10 d-flex align-items-center justify-content-around">
          <Link to="/memberLogin">
            <button className="btn btn-dark">Member Login</button>
          </Link>
          <Link to="/ourTeam">
            <button className="btn btn-dark">Our Team</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
