import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/profile");
  }, [user, navigate]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    const member = {
      email: formData.email.toString().toLowerCase(),
      password: formData.password.toString().toLowerCase(),
    };

    axios
      .post("/api/member", member)
      .then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message);
          localStorage.setItem("member", JSON.stringify(response.data.user));
          dispatch({ type: "LOGIN_SUCCESS", payload: response.data.token });
          navigate("/profile");
          setFormData({
            email: "",
            password: "",
          });
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        dispatch({ type: "LOGIN_FAILURE", payload: error });
      });
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="container-fluid">
      <div
        className="row align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-6 col-10 d-flex align-items-center justify-content-center">
          <form onSubmit={handleClick} style={{ width: "90%" }}>
            <div className="form-floating">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter your email"
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                id="email"
                value={formData.email}
                onChange={handleOnChange}
              />
              <label htmlFor="email" className="form-label">
                EMAIL
              </label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Enter your password"
                name="password"
                required
                id="password"
                value={formData.password}
                onChange={handleOnChange}
              />
              <label htmlFor="password" className="form-label">
                PASSWORD
              </label>
            </div>
            <button type="submit" className="btn btn-dark">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
