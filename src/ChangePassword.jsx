// import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";
import React, { useState } from "react";

function ChangePassword() {
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
              <a href="/SaveJobs">
                <button class="p-2 mb-1 profilebutton  ">
                  Saved Jobs
                </button>
              </a>
              <a href="">
                <button class="p-2 mb-1 bg-primary profilebutton h-25 text-white ">
                  Change Password
                </button>
              </a>
              <a href="/LoginPage">
                <button class="p-2 mb-1 profilebutton ">Log Out</button>
              </a>
            </div>
          </div>

          <div class="col-md-1"></div>

          {/* <!-- 2nd part -- > */}
          <div class="col-md-7 text-start">
            <div class="card p-4">
               <h5 class="profileh5">Change Password</h5>
               <hr />
               <label for="" class="profilename mb-1">Old Password</label>
               <input type="text" placeholder="Enter your Old password" class="form-control w-75 m-0" style={{border: "1px solid black"}}/>
               <div class="d-flex flex-row mt-2">
                <div class="col-md-4">
                <label for="" class="profileh5 mb-1">New Password</label><br />
                    <input type="text" name="" id="" placeholder="Enter your new Password" class="form-control w-100 p-2 profileselect m-0 " style={{border: "1px solid black"}}/>
            </div>
            <div class="col-md-1">
                 
            </div>
            <div class="col-md-4">
                <label for="" class="profileh5 mb-1">Confirm Password</label><br />
                <input type="text" name="" id="" placeholder="Confirm Password" class="form-control w-100 p-2 profileselect m-0 " style={{border: "1px solid black"}} />
            </div>
               </div>
               <button class=" mt-4 profilebutton1">Update Password</button>
            </div>
        </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default ChangePassword;
