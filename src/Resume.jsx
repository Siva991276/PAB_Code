import React from "react";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function ResumeDetails() {
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
      {/* card-sections */}
      <div class="container">
        <div class="row">
          <div class="col-md-4 text-start">
            <div class="card p-3 shadow">
              <div class="d-flex flex-row py-2">
                <div>
                  <Link to = "/ProfileCode"><i
                    class=" fa-sharp fa-solid fa-circle-user profileicon px-3"
                    style={{ fontSize: "120px" }}
                  ></i></Link>
                </div>
                <div>
                  <h5 class="resumeh5">B.Siva Koteswara Rao</h5>
                  <p>Software Developer</p>
                  <p>at Perfex Technologies</p>
                </div>
              </div>
              <div class="p-2">
                <i class="fa-solid fa-phone-volume px-3 resumeicon"></i>
                <span>9912762975</span>
                <i class="fa-solid fa-circle-check janlogin px-3 resumeicon1"></i>
                <br />
                <i class="fa-solid fa-envelope px-3 resumeicon"></i>
                <span>badasiva@gmail.com</span>
                <i class="fa-solid fa-circle-check janlogin px-3 resumeicon1"></i>
                <br />
                <i class="fa-solid fa-briefcase px-3 resumeicon"></i>
                <span>2 years</span>
                <br />
                <i class="fa-solid fa-location-dot px-3 resumeicon"></i>
                <span>Hyderabad</span>
                <br />
                <i class="fa-solid fa-money-bill px-3 resumeicon"></i>
                <span>8,00,000 - 12,00,000</span>
                <br />
                <i class="fa-solid fa-calendar-days px-3 resumeicon"></i>
                <span>10 days notice period</span>
              </div>
              <hr />
              <div>
                <p class="spa85">Your profile updated</p>
                <span class="spa82 p-1 px-4">89%</span>
                <span class="spa83 mx-3">Add 3 missing details</span>
                <p class="spa84 ">Profile last updated -25feb,2023</p>
              </div>
            </div>
            <div class="mt-2 ">
             <a href="#Resume"> <button class="w-100 p-2 mt-2 resumebtn shadow">Resume</button></a>
             <a href="#ResumeHeadline"> <button class="w-100 p-2 mt-2 resumebtn shadow">
                Resume Headline
              </button></a>
              <a href="#ProfileSummary"><button class="w-100 p-2 mt-2 resumebtn shadow">
                Profile Summary
              </button></a>
             <a href="#KeySkills"> <button class="w-100 p-2 mt-2 resumebtn shadow">
                Key skills
              </button></a>
             <a href="#Employment"> <button class="w-100 p-2 mt-2 resumebtn shadow">
                Employment
              </button></a>
             <a href="#Education"> <button class="w-100 p-2 mt-2 resumebtn shadow">Education</button></a>
             <a href="#Projects"> <button class="w-100 p-2 mt-2 resumebtn shadow">Projects</button></a>
             <a href="#Accomplishment"> <button class="w-100 p-2 mt-2 resumebtn shadow">
                Accomplishment
              </button></a>
             <a href="#DesiredcareerProfile"> <button class="w-100 p-2 mt-2 resumebtn shadow">
                Desired career Profile
              </button></a>
             <a href="#Personaldetails"> <button class="w-100 p-2 mt-2 resumebtn shadow">
                Personal Details
              </button></a>
            </div>
          </div>

          {/* 2nd-card */}
          <div class="col-md-8 text-start mb-5   ">
                <div class="card p-3 shadow" id="Resume">
                    <p><b class="px-2">Resume</b> (Recruiters generally do not look at profiles without resumes.)</p>
                    <hr />
                    <div class="resumeUploadbtn">
                        <button class="w-25 resumeUploadbtn1">Upload Resume <i
                                class="fa-solid fa-upload text-white px-2"></i></button>
                    </div>
                    <p class="resumepara">Supported formates : doc,docx,rtf,pdf,upto 2mb </p>

                </div>

                <div class="card p-4 mt-3 shadow">
                    <div id="ResumeHeadline">
                        <div class="d-flex flex-row">
                            <h5>Resume Headline</h5>
                            <div style={{marginLeft: "auto"}}>
                                <i class="fa-solid fa-pen-to-square iconedit"></i>
                            </div>
                        </div>
                        <hr />
                        <p>Software Developer currently living in Hyderabad</p>
                    </div>

                </div>

                <div class="card p-4 mt-3 shadow">
                    <div id="ProfileSummary">
                        <div class="d-flex flex-row">
                            <h5>Profile Summary</h5>
                            <div style={{marginLeft: "auto"}}>
                                <i class="fa-solid fa-pen-to-square iconedit"></i>
                            </div>
                        </div>
                        <hr />
                        <p>Software Developer specialist with 3+ years of experience in the management of th complete
                            design process from conceptualization to delivery. Skilled with adobe creative suite
                            (photoshop,illustrator,lightroom,aftereffects,charector Animator,adobeanimate).able to
                            stretch the boundaries of digital story telling to support brands standout. </p>
                    </div>

                </div>
                <div class="card p-4 mt-3 shadow">
                    <div id="KeySkills">
                        <div class="d-flex flex-row" >
                            <h5>Key Skills</h5>
                            <div style={{marginLeft: "auto"}}>
                                <i class="fa-solid fa-pen-to-square iconedit"></i>
                            </div>
                        </div>
                        <hr />
                        <div class="resumegroup  ">
                            
                            <button class="btnresume p-2 px-3 m-1 ">Photoshop</button>
                            <button class="btnresume1 shadow p-2 px-3 m-1">aftereffects</button>
                            <button class="btnresume shadow p-2 px-4 m-1">Editing</button>
                            <button class="btnresume shadow p-2 px-2 m-1 ">Adobe XD</button>
                            <button class="btnresume shadow p-2 px-2 m-1">Animation</button>
                        </div>
                        <div class="resunegroup">
                            <button class="btnresume1 shadow p-2 px-3 m-1">Premire Pro</button>
                            <button class="btnresume shadow p-2 px-4 m-1 ">Blender</button>
                            <button class="btnresume shadow p-2 px-3 m-1 ">illustrator</button>
                            <button class="btnresume shadow p-2 px-4 m-1 ">Canva</button>
                            <button class="btnresume shadow p-2 px-4 m-1 ">Figma</button>
                        </div>
                    </div>

                </div>
                 <div class="card p-4 mt-3 shadow">
                    <div id="Employment">
                        <div class="d-flex flex-row">
                            <h5>Employment <span style={{fontSize: "small"}}>(Enter your current and previous Employment
                                    details)</span></h5>

                        </div>
                        <hr />
                        <div class="d-flex flex-row">
                            <div style={{borderRight: "1px solid gray"}} class="px-5">
                                <h6 class="resumeh6">Software Developer</h6>
                                <p>PerfexTechnologies </p>
                                <p>Fulltime|May 2022 to present (1 year 3 months) </p>
                                <p>1 Month Notice Period</p>
                            </div>
                            <div style={{marginLeft: "auto"}} class="mt-5">
                                <b class="resumeh7 ">+ Add Employment</b>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card p-4 mt-3 shadow">
                    <div id="Education">
                        <div class="d-flex flex-row" >
                            <h5>Education <span style={{fontSize: "small"}}>(Enter your qualification details)</span></h5>

                        </div>
                        <hr />
                        <div class="d-flex flex-row">
                            <div style={{borderRight: "1px solid gray"}} class="px-5">
                                <p>Add class x | ADD class XII | Add graduation/Diploma</p>
                                <p>Add masters/Post graduation | Add doctorate/PhD</p>
                            </div>
                            <div style={{marginLeft: "auto"}} class="mt-5">
                                <b class="resumeh7 ">+ Add Education</b>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card p-4 mt-3 shadow">
                    <div id="Projects">
                        <div class="d-flex flex-row" >
                            <h5>Projects</h5>

                        </div>
                        <hr />
                        <div class="d-flex flex-row">
                            <div style={{borderRight: "1px solid gray"}} class="px-5">
                                <p>(Add details about projects you have done )</p>

                            </div>
                            <div style={{marginLeft: "auto"}} class="mt-5">
                                <b class="resumeh7 ">+ Add Projects</b>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card p-4 mt-3 shadow">
                    <div>
                        <div class="d-flex flex-row">
                            <h5>Accomplishment</h5>
                            <div style={{marginLeft: "auto"}} >
                                <i class="fa-solid fa-pen-to-square iconedit"></i>
                            </div>
                        </div>
                        <hr />
                        <div class="d-flex flex-row">
                            <div>
                                <h6>Work Sample</h6>
                                <p>Add links to your projects(e.g. github links etc.)</p>
                            </div>
                            <div style={{marginLeft: "auto"}} >
                                <i class="fa-solid fa-pen-to-square iconedit"></i>
                            </div>
                        </div>
                        <hr />
                        <div class="d-flex flex-row">
                            <div>
                                <h6>White paper/Research publication </h6>
                                <p>Add links to your online publications</p>
                            </div>
                            <div style={{marginLeft: "auto"}} >
                                <i class="fa-solid fa-pen-to-square iconedit"></i>
                            </div>
                        </div>
                        <hr />
                        <div class="d-flex flex-row"id="Accomplishment">
                            <div>
                                <h6>Presentation </h6>
                                <p>Add links to your online presentations</p>
                            </div>
                            <div style={{marginLeft: "auto"}} >
                                <i class="fa-solid fa-pen-to-square iconedit"></i>
                            </div>
                        </div>
                        <hr />
                        <div class="d-flex flex-row">
                            <div>
                                <h6>Patent </h6>
                                <p>Add deatails of patents you have filed</p>
                            </div>
                            <div style={{marginLeft: "auto"}} >
                                <i class="fa-solid fa-pen-to-square iconedit"></i>
                            </div>
                        </div>
                        <hr />
                        <div class="d-flex flex-row">
                            <div>
                                <h6>Certification</h6>
                                <p>Add details of Certifications you have achieved/completed</p>
                            </div>
                            <div style={{marginLeft: "auto"}} >
                                <i class="fa-solid fa-pen-to-square iconedit"></i>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card p-4 mt-3 shadow">
                    <div id="DesiredcareerProfile">
                        <div class="d-flex flex-row">
                            <h5>Desired career Profile</h5>
                            <div style={{marginLeft: "auto"}} >
                                <i class="fa-solid fa-pen-to-square iconedit"></i>
                            </div>
                        </div>


                        <hr />
                        <div class="d-flex flex-row">
                            <div style={{borderRight: "1px solid gray"}} class="px-5">
                                <h6 class="resumeh6">Desire Industry</h6>
                                <p>IT services & conslting</p>
                                <h6 class="resumeh6">designation</h6>
                                <p>Software developer </p>
                                <h6 class="resumeh6">Desired to shift</h6>
                                <p>Day/night</p>
                            </div>
                            <div class=" px-5">
                                <h6 class="resumeh6">Prefered location</h6>
                                <p>Hyderabad</p>
                                <h6 class="resumeh6">Expected ctc</h6>
                                <p>5,00,000 - 7,00,000</p>
                                <h6 class="resumeh6">Employment type</h6>
                                <p>Full time</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="card p-4 mt-3 shadow">
                    <div id="Personaldetails">
                        <div class="d-flex flex-row">
                            <h5>Personal details</h5>

                        </div>
                        <hr />
                        <div class="d-flex flex-row">
                            <div style={{borderRight: "1px solid gray"}} class="px-5">
                                <h6 class="resumeh6">Date Of Birth</h6>
                                <p>06 December 1994</p>
                                <h6 class="resumeh6">Age</h6>
                                <p>25 </p>
                                <h6 class="resumeh6">Gender</h6>
                                <p>Male</p>
                            </div>

                            <div class=" px-5">
                                <h6 class="resumeh6">Marital Status</h6>
                                <p>Single</p>
                                <h6 class="resumeh6">Languages</h6>
                                <p>Telugu,Hindi,English</p>
                                <h6 class="resumeh6">Address</h6>
                                <p>201,plot 82,laxminagar colony,filmnaga<br />hyderabad,telangana-500008</p>

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
export default ResumeDetails;
