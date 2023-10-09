import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";

function ReBuyServices() {
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
              <a href="">
                <button class="buttons21 col-12 col-md-2 mx-2">
                  Data Base
                </button>
              </a>
              <a href="./ReJobPosting">
                <button class="buttons1 col-12 col-md-2  mx-2">
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
            class="card content11"
            style={{ backgroundColor: "#fbf7fd", border: "none" }}
          >
            <div class="row mx-5 p-2">
              <div class="card col-12 col-md-5 mt-3">
                <div className="card">
                  <div class="heading-page row p-2">
                    <h2 class="Monthly1 col-12 col-md-4 mx-2">Monthly</h2>
                    <div className="col-12 col-md-3"></div>
                    <h2 class="Daily1 col-12 col-md-4 ">Daily</h2>
                  </div>
                </div>

                <div class="row mt-3 ">
                  <div class="content21 col-12 col-md-6">
                    <p class="para21 text-start mx-2">
                      2000 Excel Downloads <br />
                      <span>1000 Profile Views</span>
                      <br />
                      <span>100SMS</span>
                    </p>
                  </div>
                  <div class="content2  col-12 col-md-6">
                    <p class="para21 text-start px-2 ">
                      250 Excel Downloads <br />
                      <span>150 Profile Views</span>
                      <br />
                      <span>30SMS</span>
                    </p>
                  </div>
                </div>
                <hr className="mt-0" />
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-2 "></div>
                    <div className=" card col-12 col-md-8 shadow ">
                      <div className="row">
                        <div class="col-12 col-md-5">
                          <div>
                            <p class="months1 mt-3">1 Monthly </p>
                          </div>
                        </div>

                        <div className="col-12 col-md-1 underline">|</div>
                        <div class="col-12 col-md-4 mt-3">
                          <p class="amounts px-2">4999+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container mt-1">
                  <div className="row">
                    <div className="col-12 col-md-2 "></div>
                    <div className=" card col-12 col-md-8 shadow ">
                      <div className="row">
                        <div class="col-12 col-md-5">
                          <div>
                            <p class="months1 mt-3">3 Monthly </p>
                          </div>
                        </div>

                        <div className="col-12 col-md-1 underline">|</div>
                        <div class="col-12 col-md-4 mt-3">
                          <p class="amounts px-2">1299+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container mt-1">
                  <div className="row">
                    <div className="col-12 col-md-2 "></div>
                    <div className=" card col-12 col-md-8 shadow ">
                      <div className="row">
                        <div class="col-12 col-md-5">
                          <div>
                            <p class="months1 mt-3">6 Monthly </p>
                          </div>
                        </div>

                        <div className="col-12 col-md-1 underline">|</div>
                        <div class="col-12 col-md-4 mt-3">
                          <p class="amounts px-2">1299+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container mt-1">
                  <div className="row">
                    <div className="col-12 col-md-2 "></div>
                    <div className=" card col-12 col-md-8 shadow ">
                      <div className="row">
                        <div class="col-12 col-md-5">
                          <div>
                            <p class="months1 mt-3">9 Monthly </p>
                          </div>
                        </div>

                        <div className="col-12 col-md-1 underline">|</div>
                        <div class="col-12 col-md-4 mt-3">
                          <p class="amounts px-2">3899+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-12 mt-2 mb-4">
                  <button class="button31 col-12 col-md-4 p-2 ">Buy Now</button>
                </div>
              </div>
              {/* <!-- 2nd --> */}
              <div className="col-12 col-md-1"></div>
              <div class="card col-12 col-md-5 mt-3">
                <div className="card">
                  <div class="heading-page row p-2">
                    <h2 class="Monthly1 col-12 col-md-4 mx-2">Monthly</h2>
                    <div className="col-12 col-md-3"></div>
                    <h2 class="Daily1 col-12 col-md-4 ">Daily</h2>
                  </div>
                </div>

                <div class="row mt-3 ">
                  <div class="content21 col-12 col-md-6">
                    <p class="para21 text-start mx-2">
                      4000 Excel Downloads <br />
                      <span>2000 Profile Views</span>
                      <br />
                      <span>250SMS</span>
                    </p>
                  </div>
                  <div class="content2  col-12 col-md-6">
                    <p class="para21 text-start px-2 ">
                      500 Excel Downloads <br />
                      <span>300 Profile Views</span>
                      <br />
                      <span>100SMS</span>
                    </p>
                  </div>
                </div>
                <hr className="mt-0" />
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-2 "></div>
                    <div className=" card col-12 col-md-8 shadow ">
                      <div className="row">
                        <div class="col-12 col-md-5">
                          <div>
                            <p class="months1 mt-3">1 Monthly </p>
                          </div>
                        </div>

                        <div className="col-12 col-md-1 underline">|</div>
                        <div class="col-12 col-md-4 mt-3">
                          <p class="amounts px-2">8999+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container mt-1">
                  <div className="row">
                    <div className="col-12 col-md-2 "></div>
                    <div className=" card col-12 col-md-8 shadow ">
                      <div className="row">
                        <div class="col-12 col-md-5">
                          <div>
                            <p class="months1 mt-3">4 Monthly </p>
                          </div>
                        </div>

                        <div className="col-12 col-md-1 underline">|</div>
                        <div class="col-12 col-md-4 mt-3">
                          <p class="amounts px-2">9299+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container mt-1">
                  <div className="row">
                    <div className="col-12 col-md-2 "></div>
                    <div className=" card col-12 col-md-8 shadow ">
                      <div className="row">
                        <div class="col-12 col-md-5">
                          <div>
                            <p class="months1 mt-3">6 Monthly </p>
                          </div>
                        </div>

                        <div className="col-12 col-md-1 underline">|</div>
                        <div class="col-12 col-md-4 mt-3">
                          <p class="amounts px-2">5299+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container mt-1">
                  <div className="row">
                    <div className="col-12 col-md-2 "></div>
                    <div className=" card col-12 col-md-8 shadow ">
                      <div className="row">
                        <div class="col-12 col-md-5">
                          <div>
                            <p class="months1 mt-3">7 Monthly </p>
                          </div>
                        </div>

                        <div className="col-12 col-md-1 underline">|</div>
                        <div class="col-12 col-md-4 mt-3">
                          <p class="amounts px-2">6899+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-12 mt-2 mb-4">
                  <button class="button31 col-12 col-md-4 p-2 ">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="row col-12 col-md-12">
                <div className="col-12 col-md-3 mx-4"></div>
                <p class="parag1 col-12 col-md-5 mt-3">
                  Note:Select the month that you need and click on buy option
                  Taxes are excluded in the above Plans
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default ReBuyServices;
