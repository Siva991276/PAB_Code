// import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";
import React, { useState } from "react";

function SaveJobs() {
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

      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-5">
            <div class="card ">
              <i
                class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3"
                style={{ fontSize: "200px" }}
              ></i>

              <Link to="/ProfileCode">
                {" "}
                <a href="profile.html">
                  <button class="p-2 mb-1 profilebutton">
                    Candidate Profile
                  </button>
                </a>
              </Link>
              <a href="/ResumeDetails">
                <button class="p-2 mb-1 profilebutton  ">Resume</button>
              </a>
              <Link to="/AppliedJobs">
                {" "}
                <a href="">
                  <button class="p-2 mb-1 profilebutton ">Applied Jobs</button>
                </a>
              </Link>
              <a href="/jobalert">
                <button class="p-2 mb-1 profilebutton  ">Job Alerts</button>
              </a>
              <a href="savedjobs.html">
                <button class="p-2 mb-1 bg-primary profilebutton h-25 text-white  ">
                  Saved Jobs
                </button>
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

          <div class="col-md-1"></div>

          {/* <!-- 2nd part --> */}
          <div class="col-md-7">
            <div class="card p-4">
              <div class="d-flex flex-row p-4">
                <h6 class="mt-4">Job Alert</h6>
                <div
                  class="d-flex flex-row p-1 "
                  style={{ marginLeft: "auto" }}
                >
                  <h6 class="mt-4">Sort</h6>
                  <br />
                  <button class="dropdown-toggle mx-4  threebutton shadow ">
                    Last 3 Days
                  </button>
                </div>
              </div>
              <hr />
              <div class="card p-1 mb-3 text-start">
                <div class=" d-flex flex-row ">
                  <div class="d-flex flex-row col-md-6 images12">
                    <div class="mt-3">
                      <img
                        src="https://w7.pngwing.com/pngs/326/725/png-transparent-harman-international-industries-industry-harman-kardon-harman-professional-solutions-samsung-electronics-samsung-blue-text-logo-thumbnail.png "
                        alt=""
                        width="50px"
                      />
                    </div>
                    <div class="p-3 ">
                      <h6 class="appliedh2">Graphic Designer</h6>
                      <p class="small">Angel Broking</p>
                      <p class="small">Show more jobs in the company</p>
                    </div>
                  </div>

                  <div class="col-md-5 ">
                    <h6 class="px-5" style={{ fontWeight: "bold" }}>
                      4.5-6 LPA
                    </h6>
                    <i class="fa-solid fa-location-dot"></i>
                    <span class=" small mx-3">Hyderabad/Secundrabad</span>
                    <br />
                    <i class="fa-solid fa-briefcase p-3"></i>
                    <span class="small">1-3 years</span>
                  </div>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div class="col-md-1"></div>
                  <div class="col-md-5">
                    <p class="small">Posted:few hours ago</p>
                    <p class="small">Openings 1</p>
                    <p class="small">job applicants:580</p>
                  </div>
                  <div class="col-md-6">
                    <button class="domain p-2 w-75 mt-3">Applied</button>
                  </div>
                </div>
              </div>

              <div class="card p-1 ">
                <div class=" d-flex flex-row text-start">
                  <div class="d-flex flex-row col-md-6 images12">
                    <div class="mt-3">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHqbVhqmfHIN17U9jSE-U9Xu-kjV5MCOoUt7J7Z1x54RpzWovnr9A3VbKVpKS_RsaDE4&usqp=CAU"
                        alt=""
                        width="50px"
                      />
                    </div>
                    <div class="p-3 ">
                      <h6 class="appliedh2">Graphic Designer</h6>
                      <p class="small">TCS</p>
                      <p class="small">Show more jobs in the company</p>
                    </div>
                  </div>

                  <div class="col-md-5 ">
                    <h6 class="px-5" style={{ fontWeight: "bold" }}>
                      5-10 LPA
                    </h6>
                    <i class="fa-solid fa-location-dot mx-2"></i>
                    <span class="small mx-2">Hyderabad/Secundrabad</span>
                    <br />
                    <i class="fa-solid fa-briefcase p-3"></i>
                    <span class="small">1-3 years</span>
                  </div>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div class="col-md-1"></div>
                  <div class="col-md-5">
                    <p class="small">Posted:few hours ago</p>
                    <p class="small">Openings 1</p>
                    <p class="small">job applicants:580</p>
                  </div>
                  <div class="col-md-6">
                    <button class="domain p-2 w-75 mt-3">Applied</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default SaveJobs;
