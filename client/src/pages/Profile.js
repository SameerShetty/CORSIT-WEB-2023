import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

function Profile() {
  const { user, dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({});
  const [isLoad, setLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/memberLogin");
    const member = JSON.parse(localStorage.getItem("member"));
    setFormData(member);
  }, [user, navigate]);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setFormData((prev) => {
      return {
        ...prev,
        img: base64,
      };
    });
  };
  const handleClick = (e) => {
    setLoad(true);
    console.log(formData);
    e.preventDefault();
    const memberUpdate = {
      name: formData.name.toString().toLowerCase(),
      img: formData.img,
      git: formData.git,
      branch: formData.branch.toString().toLowerCase(),
      year: formData.year.toString().toLowerCase(),
      tech: formData.tech.toString().toLowerCase(),
      insta: formData.insta,
      linkedIn: formData.linkedIn,
    };
    axios
      .put(
        "/api/member",

        memberUpdate,
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setLoad(false);
          toast.success(response.data.message);
          localStorage.setItem("member", JSON.stringify(response.data.user));
          setFormData(response.data.user);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setLoad(false);
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
  return (
    <div className="container-fluid">
      <button
        className="btn btn-dark position-fixed top-0 end-0 mx-3 my-2"
        onClick={() => {
          dispatch({ type: "LOGOUT_SUCCESS", payload: null });
          localStorage.clear();
        }}
      >
        Log Out
      </button>
      <div
        className="row align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-6 col-10 d-flex flex-column align-items-center justify-content-center">
          <div style={{ width: "30%", marginBottom: "3rem" }}>
            <img
              src={formData.img}
              style={{ width: "100%", objectFit: "cover" }}
              alt={"profilePic"}
            />
          </div>
          <form onSubmit={handleClick} style={{ width: "90%" }}>
            <div className="form-floating">
              <input
                type="file"
                className="form-control mb-3"
                placeholder="Upload your profile pic"
                name="img"
                accept=".jpg, .jpeg, .png"
                id="img"
                onChange={(e) => handleFileUpload(e)}
              />
              <label htmlFor="img" className="form-label">
                PROFILE PIC
              </label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Your name"
                name="name"
                required
                id="name"
                value={formData.name}
                onChange={handleOnChange}
              />
              <label htmlFor="name" className="form-label">
                NAME
              </label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Your branch"
                name="branch"
                required
                title="Enter your branch in abbreviated form i.e (CSE,ISE)"
                maxLength={4}
                id="branch"
                value={formData.branch}
                onChange={handleOnChange}
              />
              <label htmlFor="branch" className="form-label">
                BRANCH
              </label>
            </div>
            <div className="form-floating">
              <input
                type="number"
                className="form-control mb-3"
                placeholder="Your year"
                name="year"
                required
                title="Alumni must enter as 5"
                min={1}
                max={5}
                id="year"
                value={formData.year}
                onChange={handleOnChange}
              />
              <label htmlFor="year" className="form-label">
                YEAR
              </label>
            </div>
            <div className="form-floating">
              <textarea
                type="text"
                className="form-control mb-3"
                placeholder="Your domain"
                required
                name="tech"
                id="tech"
                value={formData.tech}
                onChange={handleOnChange}
              />
              <label htmlFor="tech" className="form-label">
                TECH
              </label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Your git"
                name="git"
                id="git"
                value={formData.git}
                onChange={handleOnChange}
              />
              <label htmlFor="git" className="form-label">
                GITHUB
              </label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Your linkedin"
                name="linkedIn"
                id="linkedin"
                value={formData.linkedIn}
                onChange={handleOnChange}
              />
              <label htmlFor="linkedin" className="form-label">
                LINKEDIN
              </label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Your insta"
                name="insta"
                id="insta"
                value={formData.insta}
                onChange={handleOnChange}
              />
              <label htmlFor="insta" className="form-label">
                INSTA
              </label>
            </div>
            <button type="submit" className="btn btn-dark">
              {isLoad ? <Spinner /> : "Update"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
