import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";

function ReComboProducts() {
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
                      class="nav-link navstyle2"
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
                <button class="buttons1 col-12 col-md-2  mx-2">
                  Job Posting
                </button>
              </a>
              <a href="">
                <button class="buttons21 col-12 col-md-2 mx-2  ">
                  Combo Products
                </button>
              </a>
            </div>
          </div>

          <div
            class="card"
            style={{ backgroundColor: "#fbf7fd", border: "none" }}
          >
            <div class="">
              <div class="row">
                <div className="col-12 col-md-2"></div>
                <div class="col-12 col-md-3 p-2">
                  <div class="card  text-center">
                    <p class="p-1 monthplan1">
                      3 Months Plan <br />
                      <span class="rupee2">&#8377;24999+GST</span>
                    </p>
                    <div class="text-start mx-4">
                      <p class="mlimit">Monthly Limit</p>
                      <li class="listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        3000 Excel Downloads
                      </li>
                      <li class="listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        1500 Profile Views
                      </li>
                      <li class=" listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "100px",
                            color: "white",
                          }}
                        ></i>
                        150 SMS
                      </li>
                      <li class=" listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        10 Job Posts
                      </li>
                      <hr />
                      <p class="mlimit">Daily Limit</p>
                      <li class="listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        250 Excel Downloads
                      </li>
                      <li class="listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        1000 Profile Views
                      </li>
                      <li class=" listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        50 SMS
                      </li>
                      <li class=" listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        10 Job Posts
                      </li>
                    </div>
                    <button class=" startedbtn m-3 p-2 ">Buy Now</button>
                  </div>
                </div>
                <div class="col-12 col-md-3 p-2">
                  <div class="card  text-center">
                    <p class="p-1 monthplan1">
                      6 Months Plan <br />
                      <span class="rupee2">&#8377;24999+GST</span>
                    </p>
                    <div class="text-start mx-4">
                      <p class="mlimit">Monthly Limit</p>
                      <li class="listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        3000 Excel Downloads
                      </li>
                      <li class="listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        1500 Profile Views
                      </li>
                      <li class=" listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        150 SMS
                      </li>
                      <li class=" listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        10 Job Posts
                      </li>
                      <hr />
                      <p class="mlimit">Daily Limit</p>
                      <li class="listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        250 Excel Downloads
                      </li>
                      <li class="listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        1000 Profile Views
                      </li>
                      <li class=" listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        50 SMS
                      </li>
                      <li class=" listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        10 Job Posts
                      </li>
                    </div>
                    <button class=" startedbtn m-3 p-2 ">Buy Now</button>
                  </div>
                </div>
                <div class="col-12 col-md-3 p-2">
                  <div class="card  text-center">
                    <p class="p-1 monthplan1">
                      1 Year Plan <br />
                      <span class="rupee2">&#8377;24999+GST</span>
                    </p>
                    <div class="text-start mx-4">
                      <p class="mlimit">Monthly Limit</p>
                      <li class="listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        3000 Excel Downloads
                      </li>
                      <li class="listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        1500 Profile Views
                      </li>
                      <li class=" listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        150 SMS
                      </li>
                      <li class=" listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        10 Job Posts
                      </li>
                      <hr />
                      <p class="mlimit">Daily Limit</p>
                      <li class="listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        250 Excel Downloads
                      </li>
                      <li class="listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        1000 Profile Views
                      </li>
                      <li class=" listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        50 SMS
                      </li>
                      <li class=" listiteam">
                        <i
                          class="fa-regular fa-circle-check"
                          style={{
                            backgroundColor: "#d3cade",
                            borderRadius: "80px",
                            color: "white",
                          }}
                        ></i>
                        10 Job Posts
                      </li>
                    </div>
                    <button class=" startedbtn m-3 p-2 ">Buy Now</button>
                  </div>
                </div>
              </div>

              <p class="parag1 mx-5">
                Note: Taxes are excluded in the above showing plans
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default ReComboProducts;
