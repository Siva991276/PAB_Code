// import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios, { Axios } from "axios";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function ProfileCode() {
  const [fullname, setfullname] = useState("");
  const [State, setState] = useState("");
  const [Currentlocation, setCurrentlocation] = useState("");
  const [mobile, setmobile] = useState("");
  const [emailE1, setemail] = useState("");

  const [data, setdata] = useState([]);
  console.log(fullname);
  let navigat = useNavigate();

  const useData = {
    fullname: fullname,
    State: State,
    Currentlocation: Currentlocation,
    mobile: mobile,
    emailE1: emailE1,
  };
  console.log(useData);

  const [error, setErrorMessage] = useState([]);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const validateName = (value) => {
    if (!/^[A-Za-z ]+$/.test(value)) {
      setNameError("Name should only contain letters");
    } else {
      setNameError("");
    }
  };

  const validateMobileNumber = (value) => {
    if (!/^\d{10}$/.test(value)) {
      setMobileNumberError("Mobile number should be 10 digits");
    } else {
      setMobileNumberError("");
    }
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    validateName(newName);
  };

  const handleMobileNumberChange = (e) => {
    const newNumber = e.target.value;
    setMobileNumber(newNumber);
    validateMobileNumber(newNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError && !mobileNumberError && name && mobileNumber) {
      // Perform your submit logic here
      setErrorMessage("Form submitted successfully");
    } else {
      setErrorMessage("Form submission failed. Please check errors.");
    }

    if (fullname && State && Currentlocation && mobile && emailE1 !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkZGFiYjYwYmUzZWI4NzI5MzM4OGM1IiwiaWF0IjoxNjkyMjQ5MDMyLCJleHAiOjIwNTIyNDkwMzJ9.ow8crNAYgumZNwjGdGxUciJwMXeULHHHKXHWMGmS8zk",
      };
      axios
        .post("http://localhost:4005/register", useData, { headers })
        .then((response) => {
          setdata(response.data);

          console.log(response.data);
          if (response.status === 200) {
            toast.success("Registration Successfull", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(function () {
               
            }, 3000);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };

  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark shadow mb-3 mt-2 ">
        <div class="container">
          <img src={logo} alt="" width="200px" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            style={{ backgroundColor: "black" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav mt-4" style={{ marginLeft: "auto" }}>
              <li class="nav-item ">
                <a
                  class="nav-link line1"
                  href="/Home"
                  style={{ color: "black" }}
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dropdown-toggle"
                  href="BrowserJobs"
                  style={{ color: "black" }}
                >
                  Browse Jobs
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dropdown-toggle"
                  href="/Jobs"
                  style={{ color: "black" }}
                >
                  Jobs
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  style={{ color: "black" }}
                >
                  services
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dropdown-toggle"
                  href="payment.html"
                  style={{ color: "black" }}
                >
                  payments
                </a>
              </li>
              <li class="nav-item">
                <i class="fa-solid fa-bell bellicon"></i>
              </li>
              <li class="nav-item">
                <a href="profile.html">
                  <i
                    class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon"
                    style={{ color: "Blue" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* card-Container */}

      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-5">
            <div class="card ">
              <i
                class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3"
                style={{ fontSize: "200px" }}
              ></i>

              <a href="">
                <button class="p-2 mb-1 bg-primary profilebutton h-25 text-white">
                  Candidate Profile
                </button>
              </a>
              <a href="/ResumeDetails">
                <button class="p-2 mb-1 profilebutton  ">Resume</button>
              </a>
              <Link to="/AppliedJobs">
                {" "}
                <a href="">
                  <button class="p-2 mb-1 profilebutton  ">Applied Jobs</button>
                </a>
              </Link>
              <Link to="/JobAlert">
                {" "}
                <a href="">
                  <button class="p-2 mb-1 profilebutton ">Job Alerts</button>
                </a>
              </Link>
              <a href="/SaveJobs">
                <button class="p-2 mb-1 profilebutton  ">Saved Jobs</button>
              </a>
              <a href="/ChangePassword">
                <button class="p-2 mb-1 profilebutton  ">
                  Change Password
                </button>
              </a>
              <a href="/LoginPage">
                <button class="p-2 mb-1 profilebutton ">Log Out</button>
              </a>
            </div>
          </div>
          <div class="col-md-8 text-start">
            <div class="card p-3">
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
              <form onSubmit={handleSubmit}>
                <h5 class="profileh5 text-center">Basic Information</h5>
                <hr />

                <div>
                  <label className="profilename mb-1">Name:</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="form-control w-75 mb-2"
                    // value={name}
                    // onChange={handleNameChange}
                    style={{ border: "1px solid black" }}
                    onChange={(e) => setfullname(e.target.value)}
                    value={fullname}
                  />
                  {nameError && <span className="error mes">{nameError}</span>}
                </div>
                <div>
                  <p class="profileh5">Experience</p>
                  <input type="radio" />
                  <label for="" class="m-2">
                    Fresher
                  </label>
                  <input type="radio" />
                  <label for="" class="m-2">
                    Experienced
                  </label>
                </div>

                <div class="d-flex flex-row">
                  <div class="col-md-4">
                    <label for="" class="profileh5 mb-1">
                      State
                    </label>
                    <br />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your State"
                      class="form-control w-100 p-2 profileselect"
                      style={{ border: "1px solid black" }}
                      onChange={(e) => setState(e.target.value)}
                      value={State}
                    />
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-4">
                    <label for="" class="profileh5 mb-1">
                      Current location
                    </label>
                    <br />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your Location"
                      class="form-control w-100 p-2 profileselect"
                      style={{ border: "1px solid black" }}
                      onChange={(e) => setCurrentlocation(e.target.value)}
                      value={Currentlocation}
                    />
                  </div>
                </div>
                <div class="d-flex flex-row">
                  <div class="col-md-4">
                    <div>
                      <label className="profileh5 mb-1">Mobile Number:</label>
                      <input
                        type="text"
                        // value={mobileNumber}
                        // onChange={handleMobileNumberChange}
                        placeholder="Enter your mobile number"
                        className="form-control w-100 p-2 profileselect"
                        style={{ border: "1px solid black" }}
                        onChange={(e) => setmobile(e.target.value)}
                        value={mobile}
                      />
                      {mobileNumberError && (
                        <span className="error mes">{mobileNumberError}</span>
                      )}
                    </div>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-4">
                    <label for="" class="profileh5 mb-1">
                      Email
                    </label>
                    <br />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your Email Address"
                      class="form-control w-100 p-2 profileselect "
                      style={{ border: "1px solid black" }}
                      onChange={(e) => setemail(e.target.value)}
                      value={emailE1}
                    />
                  </div>
                </div>

                {/* <h5 className="message-code">{error}</h5> */}
                <button type="submit" className="w-25 mt-4 p-2 profilebutton1">
                  Update Details
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ProfileCode;
