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
                <div className="col-12 col-md-1 mx-3"></div>
                <div className="card col-12 col-md-3 m-3">
                  <div className="d-flex flex-row">
                    <span
                      class="material-symbols-outlined m-1 "
                      style={{ color: "lightgray" }}
                    >
                      check_box_outline_blank
                    </span>
                    <p className="m-2 cardheading11">Export data to excel</p>
                  </div>
                  <i
                    class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3"
                    style={{ fontSize: "90px", Color: "#f8f1f1" }}
                  ></i>
                   <span className="profilename123">Sashi Kumar</span>
                </div>
                <div className=" card col-12 col-md-6 m-3">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatum ducimus, ullam reprehenderit earum ab, obcaecati
                    qui vitae recusandae eligendi similique laborum sed,
                    accusantium dolorem ea deserunt nemo? Vitae cum aperiam
                    perferendis quibusdam quam exercitationem, earum pariatur
                    autem ipsa fugit, accusantium sunt adipisci? Accusantium
                    architecto in ipsam, magnam nobis sunt? Laboriosam.
                  </p>
                </div>
                <div className="col-12 col-md-1"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
export default ReSearchCandidates;
