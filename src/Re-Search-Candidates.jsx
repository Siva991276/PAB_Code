import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";

function ReSearchCandidates() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <nav class="navbar navbar-expand-sm bg-recruiter shadow">
            <div class="container mt-2 ">
              <img src={logo} alt="logo" width="200px" />
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar"
                style={{ backgroundcolor: "black" }}
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav logostyle">
                  <li class="nav-item">
                    <a class="nav-link navstyle2  " href="/ReDashBoard">
                      Dashboard
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link  navstyle2"
                      href=""
                      style={{ color: "#462177" }}
                    >
                      Search Candidates
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navstyle2 " href="./ReBuyServices">
                      Buy Services
                    </a>
                  </li>

                  <li class="nav-item logosymbol mx-4 mt-1 ">
                    <i class="fa-solid fa-bell bellicon11"></i>
                  </li>
                  <li class="nav-item logosymbol mt-1">
                    <a href="./ReCompanyProfile">
                      <i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon11 mt-1 "></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="container8">
            <div class="row">
              <div class="col-12">
                <h2 class="homeh2">Find your right candidate here</h2>
                <p class="homepara">
                  5 lakh+ candidates for you to explore now
                </p>
              </div>
              <div class="col-12 col-md-12 homebutton">
                <button class=" col-12 col-md-3 subhomebutton shadow  m-1 text-start">
                  <i class="fa-solid fa-magnifying-glass p-2 "></i>
                  <span className="hide-text121 mx-3">
                    job Title or company{" "}
                  </span>
                  <i class="fa-solid fa-sort-down p-2 "></i>
                </button>
                <button class="col-12 col-md-3 subhomebutton shadow m-1 text-start">
                  <i class="fa-solid fa-location-dot p-2"></i>
                  <span className="hide-text121 mx-2">
                    city,province or Region{" "}
                  </span>
                  <i class="fa-solid fa-sort-down p-2 "></i>
                </button>

                <button class=" col-12 col-md-3 subhomebutton shadow m-1 text-start">
                  <i class="fa-solid fa-briefcase p-2 "></i>
                  <span className="hide-text121 mx-5">Experience </span>
                  <i class="fa-solid fa-sort-down p-2 "></i>
                </button>
              </div>
              <div className="col-12 col-md-9"></div>
              <button className="col-12 col-md-1 morefilter p-1 mt-2">
                +More Filtes
              </button>
              <div class="homebutton1">
                <button
                  class="subbutton1 mb-2"
                  style={{
                    width: "100px",
                    marginTop: "30px",
                    backgroundColor: "#2c0264",
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-1 mx-3"></div>
          <div className="col-12 col-md-4 mt-5 ">
            <div className="card text-start shadow" style={{ border: "none" }}>
              <div className="d-flex flex-row">
                <div className=" col-md-1">
                  <i
                    class="fa-solid fa-square-check p-1 mt-2"
                    style={{ color: "green" }}
                  ></i>
                </div>
                <div className=" col-md-8">
                  <p className="paramessage123">
                    Export all candidates data to excel
                  </p>
                </div>
                <div className="  col-md-3 ">
                  <button className="Excelbut p-1 mt-1">
                    Excel <i class="fa-solid fa-download "></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-1 mx-5"></div>
          <div className="col-12 col-md-4 buttonyeat">
            <button className="yearbtn11 px-4 ">
              Years <i class="fa-solid fa-sort-down  "></i>
            </button>
            <button className="resultpage111 mx-2 px-2 mt-1">
              Result Per Page:10 <i class="fa-solid fa-sort-down "></i>
            </button>
          </div>

          <div className="card col-12 col-md-12 mt-4 contentbgcard">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-1 mx-4"></div>
                <div className="card col-12 col-md-2 mt-4">
                  <div className="d-flex flex-row">
                    <span
                      class="material-symbols-outlined m-1 "
                      style={{ color: "lightgray" }}
                    >
                      check_box_outline_blank
                    </span>
                    <p className="m-2 cardheading11">Export data to excel</p>
                  </div>

                  <p
                    class=" fa-sharp fa-solid fa-circle-user profileicon"
                    style={{ fontSize: "80px", Color: "#f8f1f1" }}
                  ></p>
                  <span className="profilename123">Sashi Kumar</span>
                  <hr style={{ color: "a6a6aa" }} />

                  <div className="col-12 col-md-4 d-flex flex-row ">
                    <button className="emailbtn123 p-1 m-1">Email</button>
                    <button className="emailbtn123 p-1 m-1">Contact</button>
                    <button className="emailbtn123 p-1 m-1">SMS</button>
                  </div>
                </div>

                <div className="card col-12 col-md-7 m-4">
                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Key Skills
                        <p className="skilldis">
                          Photoshop, Aftereffects, Adobe XD, Premire Pro,
                          Blender, Illustrator....More
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Experience
                        <p className="skilldis">3 years</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Designation
                        <p className="skilldis">UI & UX Designer</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-2 text-start">
                      <p className="skillpara">
                        Desired Industry
                        <p className="skilldis">IT Software</p>
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Highest Graduation
                        <p className="skilldis">
                          Bachelor of Arts in Graphic Design
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Employment Type
                        <p className="skilldis">Full Time, Permanent</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Department
                        <p className="skilldis">UX, Design & Architecture</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-2 text-start">
                      <p className="skillpara">
                        Prefered Shift
                        <p className="skilldis">Day/Night</p>
                      </p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Current Location
                        <p className="skilldis">Hyderabad</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Prefered Location
                        <p className="skilldis">Hyderabad, Pune,</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Expected CTC
                        <p className="skilldis">5,00,000 - 8,00,000</p>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Age
                        <p className="skilldis">--Years</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Gender
                        <p className="skilldis">Male</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Marital Status
                        <p className="skilldis">Single</p>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Date Of Birth
                        <p className="skilldis">06 December 1969</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Address
                        <p className="skilldis">
                          201, Plot 69, Laxmi Nagar,Filmnagar, Hyderabad.
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Languages Known
                        <p className="skilldis">Telugu, Hindi, English</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-1 mx-4"></div>
                <div className="card col-12 col-md-2 mt-4">
                  <div className="d-flex flex-row">
                    <span
                      class="material-symbols-outlined m-1 "
                      style={{ color: "lightgray" }}
                    >
                      check_box_outline_blank
                    </span>
                    <p className="m-2 cardheading11">Export data to excel</p>
                  </div>

                  <p
                    class=" fa-sharp fa-solid fa-circle-user profileicon"
                    style={{ fontSize: "80px", Color: "#f8f1f1" }}
                  ></p>
                  <span className="profilename123">Sashi Kumar</span>
                  <hr style={{ color: "a6a6aa" }} />

                  <div className="col-12 col-md-4 d-flex flex-row ">
                    <button className="emailbtn123 p-1 m-1">Email</button>
                    <button className="emailbtn123 p-1 m-1">Contact</button>
                    <button className="emailbtn123 p-1 m-1">SMS</button>
                  </div>
                </div>

                <div className="card col-12 col-md-7 m-4">
                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Key Skills
                        <p className="skilldis">
                          Photoshop, Aftereffects, Adobe XD, Premire Pro,
                          Blender, Illustrator....More
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Experience
                        <p className="skilldis">3 years</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Designation
                        <p className="skilldis">UI & UX Designer</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-2 text-start">
                      <p className="skillpara">
                        Desired Industry
                        <p className="skilldis">IT Software</p>
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Highest Graduation
                        <p className="skilldis">
                          Bachelor of Arts in Graphic Design
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Employment Type
                        <p className="skilldis">Full Time, Permanent</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Department
                        <p className="skilldis">UX, Design & Architecture</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-2 text-start">
                      <p className="skillpara">
                        Prefered Shift
                        <p className="skilldis">Day/Night</p>
                      </p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Current Location
                        <p className="skilldis">Hyderabad</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Prefered Location
                        <p className="skilldis">Hyderabad, Pune,</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Expected CTC
                        <p className="skilldis">5,00,000 - 8,00,000</p>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Age
                        <p className="skilldis">--Years</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Gender
                        <p className="skilldis">Male</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Marital Status
                        <p className="skilldis">Single</p>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Date Of Birth
                        <p className="skilldis">06 December 1969</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Address
                        <p className="skilldis">
                          201, Plot 69, Laxmi Nagar,Filmnagar, Hyderabad.
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Languages Known
                        <p className="skilldis">Telugu, Hindi, English</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-1 mx-4"></div>
                <div className="card col-12 col-md-2 mt-4">
                  <div className="d-flex flex-row">
                    <span
                      class="material-symbols-outlined m-1 "
                      style={{ color: "lightgray" }}
                    >
                      check_box_outline_blank
                    </span>
                    <p className="m-2 cardheading11">Export data to excel</p>
                  </div>

                  <p
                    class=" fa-sharp fa-solid fa-circle-user profileicon"
                    style={{ fontSize: "80px", Color: "#f8f1f1" }}
                  ></p>
                  <span className="profilename123">Sashi Kumar</span>
                  <hr style={{ color: "a6a6aa" }} />

                  <div className="col-12 col-md-4 d-flex flex-row ">
                    <button className="emailbtn123 p-1 m-1">Email</button>
                    <button className="emailbtn123 p-1 m-1">Contact</button>
                    <button className="emailbtn123 p-1 m-1">SMS</button>
                  </div>
                </div>

                <div className="card col-12 col-md-7 m-4">
                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Key Skills
                        <p className="skilldis">
                          Photoshop, Aftereffects, Adobe XD, Premire Pro,
                          Blender, Illustrator....More
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Experience
                        <p className="skilldis">3 years</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Designation
                        <p className="skilldis">UI & UX Designer</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-2 text-start">
                      <p className="skillpara">
                        Desired Industry
                        <p className="skilldis">IT Software</p>
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Highest Graduation
                        <p className="skilldis">
                          Bachelor of Arts in Graphic Design
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Employment Type
                        <p className="skilldis">Full Time, Permanent</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Department
                        <p className="skilldis">UX, Design & Architecture</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-2 text-start">
                      <p className="skillpara">
                        Prefered Shift
                        <p className="skilldis">Day/Night</p>
                      </p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Current Location
                        <p className="skilldis">Hyderabad</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Prefered Location
                        <p className="skilldis">Hyderabad, Pune,</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Expected CTC
                        <p className="skilldis">5,00,000 - 8,00,000</p>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Age
                        <p className="skilldis">--Years</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Gender
                        <p className="skilldis">Male</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Marital Status
                        <p className="skilldis">Single</p>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Date Of Birth
                        <p className="skilldis">06 December 1969</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Address
                        <p className="skilldis">
                          201, Plot 69, Laxmi Nagar,Filmnagar, Hyderabad.
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Languages Known
                        <p className="skilldis">Telugu, Hindi, English</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-1 mx-4"></div>
                <div className="card col-12 col-md-2 mt-4">
                  <div className="d-flex flex-row">
                    <span
                      class="material-symbols-outlined m-1 "
                      style={{ color: "lightgray" }}
                    >
                      check_box_outline_blank
                    </span>
                    <p className="m-2 cardheading11">Export data to excel</p>
                  </div>

                  <p
                    class=" fa-sharp fa-solid fa-circle-user profileicon"
                    style={{ fontSize: "80px", Color: "#f8f1f1" }}
                  ></p>
                  <span className="profilename123">Sashi Kumar</span>
                  <hr style={{ color: "a6a6aa" }} />

                  <div className="col-12 col-md-4 d-flex flex-row ">
                    <button className="emailbtn123 p-1 m-1">Email</button>
                    <button className="emailbtn123 p-1 m-1">Contact</button>
                    <button className="emailbtn123 p-1 m-1">SMS</button>
                  </div>
                </div>

                <div className="card col-12 col-md-7 m-4">
                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Key Skills
                        <p className="skilldis">
                          Photoshop, Aftereffects, Adobe XD, Premire Pro,
                          Blender, Illustrator....More
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Experience
                        <p className="skilldis">3 years</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Designation
                        <p className="skilldis">UI & UX Designer</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-2 text-start">
                      <p className="skillpara">
                        Desired Industry
                        <p className="skilldis">IT Software</p>
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Highest Graduation
                        <p className="skilldis">
                          Bachelor of Arts in Graphic Design
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Employment Type
                        <p className="skilldis">Full Time, Permanent</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Department
                        <p className="skilldis">UX, Design & Architecture</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-2 text-start">
                      <p className="skillpara">
                        Prefered Shift
                        <p className="skilldis">Day/Night</p>
                      </p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Current Location
                        <p className="skilldis">Hyderabad</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Prefered Location
                        <p className="skilldis">Hyderabad, Pune,</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Expected CTC
                        <p className="skilldis">5,00,000 - 8,00,000</p>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Age
                        <p className="skilldis">--Years</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Gender
                        <p className="skilldis">Male</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Marital Status
                        <p className="skilldis">Single</p>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Date Of Birth
                        <p className="skilldis">06 December 1969</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Address
                        <p className="skilldis">
                          201, Plot 69, Laxmi Nagar,Filmnagar, Hyderabad.
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Languages Known
                        <p className="skilldis">Telugu, Hindi, English</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-1 mx-4"></div>
                <div className="card col-12 col-md-2 mt-4">
                  <div className="d-flex flex-row">
                    <span
                      class="material-symbols-outlined m-1 "
                      style={{ color: "lightgray" }}
                    >
                      check_box_outline_blank
                    </span>
                    <p className="m-2 cardheading11">Export data to excel</p>
                  </div>

                  <p
                    class=" fa-sharp fa-solid fa-circle-user profileicon"
                    style={{ fontSize: "80px", Color: "#f8f1f1" }}
                  ></p>
                  <span className="profilename123">Sashi Kumar</span>
                  <hr style={{ color: "a6a6aa" }} />

                  <div className="col-12 col-md-4 d-flex flex-row ">
                    <button className="emailbtn123 p-1 m-1">Email</button>
                    <button className="emailbtn123 p-1 m-1">Contact</button>
                    <button className="emailbtn123 p-1 m-1">SMS</button>
                  </div>
                </div>

                <div className="card col-12 col-md-7 m-4">
                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Key Skills
                        <p className="skilldis">
                          Photoshop, Aftereffects, Adobe XD, Premire Pro,
                          Blender, Illustrator....More
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Experience
                        <p className="skilldis">3 years</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Designation
                        <p className="skilldis">UI & UX Designer</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-2 text-start">
                      <p className="skillpara">
                        Desired Industry
                        <p className="skilldis">IT Software</p>
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Highest Graduation
                        <p className="skilldis">
                          Bachelor of Arts in Graphic Design
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Employment Type
                        <p className="skilldis">Full Time, Permanent</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Department
                        <p className="skilldis">UX, Design & Architecture</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-2 text-start">
                      <p className="skillpara">
                        Prefered Shift
                        <p className="skilldis">Day/Night</p>
                      </p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Current Location
                        <p className="skilldis">Hyderabad</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Prefered Location
                        <p className="skilldis">Hyderabad, Pune,</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Expected CTC
                        <p className="skilldis">5,00,000 - 8,00,000</p>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Age
                        <p className="skilldis">--Years</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Gender
                        <p className="skilldis">Male</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Marital Status
                        <p className="skilldis">Single</p>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 text-start">
                      <p className="skillpara">
                        Date Of Birth
                        <p className="skilldis">06 December 1969</p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start ">
                      <p className="skillpara">
                        Address
                        <p className="skilldis">
                          201, Plot 69, Laxmi Nagar,Filmnagar, Hyderabad.
                        </p>
                      </p>
                    </div>
                    <div className="col-12 col-md-3 text-start">
                      <p className="skillpara">
                        Languages Known
                        <p className="skilldis">Telugu, Hindi, English</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default ReSearchCandidates;
