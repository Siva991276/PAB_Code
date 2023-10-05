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
                  style={{ marginLeft: "130px" }}
                >
                  <li class="nav-item">
                    <a class="nav-link navstyle2  " href="/ReDashBoard">
                      Dashboard
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  navstyle2" href="">
                      Search Candidates
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link navstyle2 text-primary" href="">
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
            <div class="">
              <a href="">
                <button class="buttons21 col-12 col-md-2 mx-2">
                  Data Base
                </button>
              </a>
              <a href="">
                <button class="buttons1 col-12 col-md-2 mx-2">
                  Job Posting
                </button>
              </a>
              <a href="">
                <button class="buttons1 col-12 col-md-2 mx-2">
                  Combo Products
                </button>
              </a>
            </div>
          </div>

          <div class=" content1">
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
                <div className="row">
                  <div className="col-12 col-md-1 mx-2 "></div>
                  <div className=" card col-12 col-md-9 shadow ">
                    <div className="d-flex flex-row">
                      <div
                        class="col-12 col-md-4 mt-3 mx-4"
                        style={{ borderRight: "1px solid rgb(211, 207, 207)" }}
                      >
                        <p class="months1">1 Monthly</p>
                      </div>
                      <div class="col-12 col-md-3 mt-3">
                        <p class="amounts">4999+</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div class="d-flex flex-row card col-12 col-md-9 text-center shadow">
                  <div
                    class="col-12 col-md-6 mt-3"
                    style={{ borderRight: "1px solid rgb(211, 207, 207)" }}
                  >
                    <p class="months1">1 Monthly</p>
                  </div>
                  <div class=" col-12 col-md-6 mt-3">
                    <p class="px-5 amounts">4999+</p>
                  </div>
                </div> */}
                <div class="d-flex flex-row card w-75 text-center mx-5 mt-2 shadow">
                  <div
                    class="col-md-6 mt-3"
                    style={{ borderRight: "1px solid rgb(211, 207, 207)" }}
                  >
                    <p class="months">1 Monthly</p>
                  </div>
                  <div class="col-md-6 mt-3">
                    <p class="px-5 amounts">4999+</p>
                  </div>
                </div>
                <div class="d-flex flex-row card w-75 text-center mx-5 mt-2 shadow">
                  <div
                    class="col-md-6 mt-3"
                    style={{ borderRight: "1px solid rgb(211, 207, 207)" }}
                  >
                    <p class="months">1 Monthly</p>
                  </div>
                  <div class="col-md-6 mt-3">
                    <p class="px-5 amounts">4999+</p>
                  </div>
                </div>
                <div class="d-flex flex-row card w-75 text-center mx-5 mt-2 shadow">
                  <div
                    class="col-md-6 mt-3"
                    style={{ borderRight: "1px solid rgb(211, 207, 207)" }}
                  >
                    <p class="months">1 Monthly</p>
                  </div>
                  <div class="col-md-6 mt-3">
                    <p class="px-5 amounts">4999+</p>
                  </div>
                </div>
                <button class="button31">Buy Now</button>
              </div>
              {/* <!-- 2nd --> */}

              {/* <div class="card1 col-12 col-md-5 mx-2 mt-3">
                <div class="">
                  <div class="heading-page d-flex flex-row">
                    <h2 class="Monthly1">Monthly</h2>
                    <h2 class="Daily1">Daily</h2>
                  </div>
                </div>
                <div class="d-flex flex-row content4 mt-3 ">
                  <div class="content2">
                    <p class="para21">
                      2000 Excel Downloads
                      <span>1000 Profile Views</span>
                      <span>100SMS</span>
                    </p>
                  </div>
                  <div class="content2">
                    <p class="para212">
                      250 Excel Downloads
                      <span>150 Profile Views</span>
                      <span>30SMS</span>
                    </p>
                  </div>
                </div>
                <hr />

                <div class="d-flex flex-row card w-75 text-center mx-5 shadow">
                  <div
                    class="col-md-6 mt-3"
                    style={{ borderRight: "1px solid rgb(211, 207, 207)" }}
                  >
                    <p class="months">1 Monthly</p>
                  </div>
                  <div class="col-md-6 mt-3">
                    <p class="px-5 amounts">4999+</p>
                  </div>
                </div>
                <div class="d-flex flex-row card w-75 text-center mx-5 mt-2 shadow">
                  <div
                    class="col-md-6 mt-3"
                    style={{ borderRight: "1px solid rgb(211, 207, 207)" }}
                  >
                    <p class="months">1 Monthly</p>
                  </div>
                  <div class="col-md-6 mt-3">
                    <p class="px-5 amounts">4999+</p>
                  </div>
                </div>
                <div class="d-flex flex-row card w-75 text-center mx-5 mt-2 shadow">
                  <div
                    class="col-md-6 mt-3"
                    style={{ borderRight: "1px solid rgb(211, 207, 207)" }}
                  >
                    <p class="months">1 Monthly</p>
                  </div>
                  <div class="col-md-6 mt-3">
                    <p class="px-5 amounts">4999+</p>
                  </div>
                </div>
                <div class="d-flex flex-row card w-75 text-center mx-5 mt-2 shadow">
                  <div
                    class="col-md-6 mt-3"
                    style={{ borderRight: "1px solid rgb(211, 207, 207)" }}
                  >
                    <p class="months">1 Monthly</p>
                  </div>
                  <div class="col-md-6 mt-3">
                    <p class="px-5 amounts">4999+</p>
                  </div>
                </div>
                <button class="button31">Buy Now</button>
              </div> */}
            </div>
            <p class="parag1">
              Note:Select the month that you need and click on buy option Taxes
              are excluded in the above Plans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReBuyServices;
