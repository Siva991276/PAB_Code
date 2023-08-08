import React from "react";
import Footer from "./Footer";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import { Link } from "react-router-dom";
import "./home.css";
import "./BrowserJobs.css";

import { useEffect, useState } from "react";
import axios from "axios";
function BrowserJobs() {
  const [blogslist, setblogslist] = useState([]);
  const [selectedblog, setselectedblog] = useState(null);

  useEffect(() => {
    fetchblogs();
  }, []);

  const fetchblogs = async () => {
    const api = "https://pab-server.onrender.com/api/jobs";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQwNzYzMzAyZjc5ZDk0Y2MyMTBjM2IiLCJpYXQiOjE2OTEzODM3NTF9.tbp-vBQFDhcR02FR3CfIs-KTscKUfqmGrQ0VSoOe80I";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setblogslist(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const onclickblogdetails = async (blogid) => {
    const selectedJobDetails = blogslist.find((each) => each._id === blogid);
    console.log(selectedJobDetails);
    setselectedblog(selectedJobDetails);
  };

  console.log(blogslist);
  console.log(selectedblog);

  return (
    <div className="">
      <nav class="navbar navbar-expand-sm">
        <div class="container">
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
                
                  <a class="nav-link navstyle " href="/Home">
                    Home
                  </a>
             
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle navstyle1" href="">
                  Browse Jobs
                </a>
              </li>
              <li class="nav-item">
                 
                  {" "}
                  <a class="nav-link dropdown-toggle navstyle" href="/Jobs">
                    Jobs
                  </a>
               
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle navstyle" href="#">
                  services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle navstyle" href="./ ">
                  payments
                </a>
              </li>
              <li class="nav-item logosymbol">
                <i class="fa-solid fa-bell bellicon"></i>
              </li>
              <li class="nav-item logosymbol">
              <Link to = "/ProfileCode"> <a href="">
                  {" "}
                  <i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon"></i>
                </a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container8">
        <div class="row">
          <div class="col-12">
            <h6 class="homepara1 mt-4">
              Home <i class="fa-solid fa-greater-than"></i>Browser Filter List
            </h6>
          </div>
          <div class="col-12 homebutton">
            <button class=" subhomebutton shadow w-25">
              <i class="fa-solid fa-magnifying-glass p-3 "></i>job Title or
              company<i class="fa-solid fa-sort-down p-3 "></i>
            </button>
            <button class=" subhomebutton shadow w-25">
              <i class="fa-solid fa-location-dot p-3"></i>city,province or
              Region<i class="fa-solid fa-sort-down p-3 "></i>
            </button>
          </div>
          <div class="homebutton1">
            <button class="subbutton1">Search</button>
          </div>
        </div>
      </div>
      {/* //heading-cards */}
      <section class="container">
        <div class="row">
          <div class="col-lg-1"></div>
          <div class="col-lg-11">
            <div class="d-flex flex-row row">
              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle location21"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Experience
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        0 years
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        1 year
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        2 year
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        3 year
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        4 year
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle location21"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Location
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Hyderabad
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Bengaluru
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chennai
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Tirupati
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Mumbai
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle location21"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Salary
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        2.5-3 LPA
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        3.5-4 LPA
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        4.5-7 LPA
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        7.5-10 LPA
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        10.5-15 LPA
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Industry
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Manufacturing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Construction
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        IT
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Transport
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Food industry
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Destignation
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Customer Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Financial Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Information Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Human Resources Officer
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chief Product Officer
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Education
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Any Postgraduate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Any Graduate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        MBA/PGDM{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        M.Pharma{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        MBBS{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Diploma{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Medical-MS/MD{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="col-md-3 col-lg nav-item">
                <div>
                  <button
                    class="dropdown-toggle indusrty"
                    data-bs-toggle="dropdown"
                    id="browseItem"
                  >
                    Skills
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Core Java
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dot Net
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Python
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Testing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        AWS
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Advance Java
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Frames
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </div>
          </div>
          {/* <!-- <div class="col-md"></div> --> */}
        </div>
        {/* <!-- Card Section --> */}
        <p class="result my-3 text-start">
          Showing 69 results for "Graphics Designing"
        </p>
        <div class="row text-start">
          <div class="col-lg-1"></div>
          <div class="col-lg-11">
            <div class="row">
              <ul className="col-12 col-md-4">
                {blogslist.map((blog) => 
                (
                  <div
                    className={`active1 ${
                      selectedblog && selectedblog._id === blog._id
                        ? "select"
                        : ""
                    }`}
                    onClick={((e) => onclickblogdetails(blog._id))}
                  >
                    <div>
                      <p class="graphics-item m-0">
                        {blog.title} <span class="package">{blog.salary}</span>
                      </p>
                      <p class="angel">{blog.recruiter.companyname} </p>
                      <p class="m-0">{blog.jobType} </p>
                      <p class="m-0">{blog.cities} </p>
                      <p class="m-0">{blog.education}</p>
                      <span class=" publish">Published one day ago</span>
                    </div>
                  </div>
                ))}
              </ul>

              {selectedblog && (
                <div class="col-lg-7 col-md-12">
                  <div class="container">
                    <div class="row">
                      <div class="">
                        <div class="bg-element">
                          <div class="d-flex flex-row row">
                            <div class="wipro-item item-wipro col-md-6 mt-2">
                              <div class="row">
                                <div class="col-lg-3">
                                  <img
                                    src={selectedblog.recruiter.profileImage}
                                    alt="img"
                                    class=" angel-img"
                                    id="imgElement"
                                  />
                                </div>

                                <div class="col-lg-9">
                                  <p
                                    class="graphics-item m-0"
                                    style={{ fontSize: "17px" }}
                                  >
                                    {selectedblog.title}
                                  </p>
                                  <p class="m-0" id="angelItem">
                                    {selectedblog.recruiter.companyname}
                                  </p>
                                  <p class="m-0 Show">
                                    Show more jobs in the company
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="wipro-item col-md-6 mt-2">
                              <div>
                                <p
                                  class="graphics-item m-0"
                                  style={{ fontSize: "20px" }}
                                >
                                  {selectedblog.salary}
                                  <span class="bookmark">
                                    <i
                                      class="fa-solid fa-bookmark book"
                                      id="bookItem"
                                    ></i>
                                  </span>
                                </p>
                                <p class="m-0">
                                  <i class="fa-solid fa-location-dot"></i>{" "}
                                  {selectedblog.cities}
                                </p>
                                <p class="m-0">
                                  <i class="fa-solid fa-briefcase"></i>{" "}
                                  {selectedblog.experience}
                                </p>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div class="d-flex flex-row row">
                            <div class="col-md-1"></div>
                            <div class="post col-md-8">
                              <p class="m-0">
                                dateOfPosting:{selectedblog.dateOfPosting}
                              </p>
                              <p class="m-0">
                                Openings:{selectedblog.maxPositions}
                              </p>
                              <p class="m-0">Job Application:580</p>
                              <p class="m-0">
                                deadline:{selectedblog.deadline}
                              </p>
                            </div>
                            <div class="col-md-3">
                              <button
                                class="now-item"
                                id="applyItem"
                                onclick="applyBtn()"
                              >
                                Apply Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                             
                             <div class="bg-element scroll-item p-4 my-5">
                                 <h5>Job Description</h5>
                                 <h6>Roles and Responsibilities</h6>
                                 <p>{selectedblog.description}</p>
                                 
                                 
                             </div>
                         </div>
                  </div>
                </div>

                
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default BrowserJobs;
