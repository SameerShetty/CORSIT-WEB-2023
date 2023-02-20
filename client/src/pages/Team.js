import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

function Team() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/member")
      .then((response) => {
        if (response.status === 200) setMembers(response.data);
        console.log(members);
      })
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <div className="container-fluid">
      <div
        className="row align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        {members.map((item) => (
          <Card detail={item} />
        ))}
      </div>
    </div>
  );
}

export default Team;
