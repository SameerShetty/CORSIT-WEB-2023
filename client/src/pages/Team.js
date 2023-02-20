import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

function Team() {
  const [members, setMembers] = useState([]);
  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    axios
      .get("/api/member")
      .then((response) => {
        if (response.status === 200) setMembers(response.data);
        setLoad(false);
        console.log(members);
      })
      .catch((err) => {
        setLoad(false);
        console.log(err.response);
      });
  }, []);
  return (
    <div className="container-fluid">
      <div
        className="row align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        {isLoad ? <Spinner /> : members.map((item) => <Card detail={item} />)}
      </div>
    </div>
  );
}

export default Team;
