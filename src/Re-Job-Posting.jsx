import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";

function ReJobPosting() {
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
              <div class="collapse navbar-collapse mx-4" id="collapsibleNavbar">
                <ul
                  class="navbar-nav logostyle"
                  
                >
                  <li class="nav-item">
                    <a class="nav-link navstyle2  " href="/ReDashBoard">
                      Dashboard
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  navstyle2" href="./ReSearchCandidates">
                      Search Candidates
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link navstyle2 "
                      href=""
                      style={{ color: "#462177" }}
                    >
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
          <div class="bannersection p-4">
            <div class="text-start">
              <a href="./ReBuyServices">
                <button class="buttons1 col-12 col-md-2 mx-2">Data Base</button>
              </a>
              <a href="./ReJobPosting">
                <button class="buttons21 col-12 col-md-2  mx-2">
                  Job Posting
                </button>
              </a>
              <a href="./ReComboProducts">
                <button class="buttons1 col-12 col-md-2 mx-2  ">
                  Combo Products
                </button>
              </a>
            </div>
          </div>

          <div
            class="card"
            style={{ backgroundColor: "#fbf7fd", border: "none" }}
          >
            <div class="row">
              <div className="col-12 col-md-2"></div>
              <div class="col-12 col-md-2 p-2">
                <div class="card  text-center">
                  <h5 class="jobposting p-2">Free Job Posting</h5>
                  <p class="amount31 p-1 m-3">
                    <span class="rupee">&#8377;0</span>
                    <br />
                    <span class="months">MONTH</span>
                  </p>

                  <p class="para31 m-2">
                    Maximum 20 unlocks next unlock 50 rupees per unlock or
                    convert to premium
                  </p>
                  <button class="startedbtn m-3 p-2 ">Get Started</button>
                </div>
              </div>
              <div class="col-12 col-md-2 p-2">
                <div class="card  text-center">
                  <h5 class="jobposting p-1">PremiumJob Posting</h5>
                  <p class="amount31 p-1 m-3">
                    <span class="rupee">&#8377;799+</span>
                    <br />
                    <span class="months">MONTH</span>
                  </p>

                  <p class="para31 m-2 mb-5">
                    30 days live in site and untitled applications
                  </p>
                  <button class="startedbtn m-3 p-2 ">Buy Now</button>
                </div>
              </div>

              <div class="col-12 col-md-2 p-2">
                <div class="card  text-center">
                  <h5 class="jobposting p-1">Express Job Posting</h5>
                  <p class="amount31 p-1 m-3">
                    <span class="rupee">&#8377;1499+</span>
                    <br />
                    <span class="months">MONTH</span>
                  </p>

                  <p class="para31 m-2 mb-5">150 direct relevant profiles</p>
                  <button class="startedbtn m-3 p-2 ">Buy Now</button>
                </div>
              </div>
              <div class="col-12 col-md-2 p-2">
                <div class="card  text-center">
                  <h5 class="jobposting p-1">Express Premium Job Posting</h5>
                  <p class="amount31 p-1 m-3">
                    <span class="rupee">&#8377;2299+</span>
                    <br />
                    <span class="months">MONTH</span>
                  </p>

                  <p class="para31 m-2 mb-3">
                    150 candidates + 30days live in site with unlimited
                    applications
                  </p>
                  <button class="startedbtn m-3 p-2 ">Buy Now</button>
                </div>
              </div>
            </div>

            <p class="parag1 mx-5">
              Note: Taxes are excluded in the above showing plans
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default ReJobPosting;
