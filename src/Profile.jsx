import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import Footer from "./Footer";
 
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import "./Registration.css";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function ProfileCode (){
    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [skills, setskills] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    let navigate = useNavigate();
    const [data, setdata] = useState([]);
    console.log(fullname);
  
    const useData = {
      fullname: fullname,
      email: email,
      mobile: mobile,
      skills: skills,
      password: password,
      confirmpassword: confirmpassword,
    };
    console.log(useData);
  
    const onSubmitForm = (e) => {
      e.preventDefault();
      if (
        fullname &&
        email &&
        mobile &&
        skills &&
        password &&
        confirmpassword !== ""
      ) {
        axios
          .post("http://localhost:4005/register", useData)
          .then((response) => {
            setdata(response.data);
  
            console.log(response.data);
            if (response.status === 200) {
              toast.success("Registration Successfull", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              setTimeout(function () {
                navigate("/LoginPage");
              }, 3000);
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      } else {
        toast.warning("Enter the Required Details");
      }
    };
     
    return (
        <div>
             <nav class="navbar navbar-expand-sm navbar-dark shadow mb-3 mt-2 ">
        <div class="container">
            <img src={logo} alt="" width="200px" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
                style={{backgroundColor:"black"}}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav mt-4" style={{marginLeft: "auto"}}>
                    <li class="nav-item ">
                        <a class="nav-link line1" href="/Home" style={{color: "black"}}>Home</a> 
                    </li>
                    <li class="nav-item">
                     <a class="nav-link dropdown-toggle" href="BrowserJobs" style={{color: "black"}}>Browse Jobs</a> 
                    </li>
                    <li class="nav-item">
                    <a class="nav-link dropdown-toggle" href="/Jobs" style={{color: "black"}}>Jobs</a> 
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="#" style={{color: "black"}}>services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="payment.html" style={{color: "black"}}>payments</a>
                    </li>
                    <li class="nav-item">
                        <i class="fa-solid fa-bell bellicon"></i>
                    </li>
                    <li class="nav-item">
                        <a href="profile.html"><i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon"
                                style={{color: "Blue"}}></i></a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    {/* card-Container */}

    <div class="container">
        <div class="row">
            <div class="col-md-3 mb-5">
                <div class="card ">
                    <i class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3" style={{fontSize: "200px"}}></i>
                  
                             <a href="profile.html"><button class="p-2 mb-1 bg-primary profilebutton h-25 text-white">Candidate
                            Profile</button></a>
                    <a href="/ResumeDetails"><button class="p-2 mb-1 profilebutton  ">Resume</button></a>
                    <a href="applied.html"> <button class="p-2 mb-1 profilebutton  ">Applied Jobs</button></a>
                    <a href="jobalert.html"><button class="p-2 mb-1 profilebutton ">Job Alerts</button></a>
                    <a href="savedjobs.html"><button class="p-2 mb-1 profilebutton  ">Saved Jobs</button></a>
                    <a href="changepassword.html"><button class="p-2 mb-1 profilebutton  ">Change
                            Password</button></a>
                    <a href="./loginform.html"><button class="p-2 mb-1 profilebutton ">Log Out</button></a>
                </div>

            </div>
            <div class="col-md-8 text-start">
                <div class="card p-3">
                    <h5 class="profileh5 text-center">Basic Information</h5>
                    <hr />
                    <label for="" class="profilename mb-1">Name</label>
                    <input type="text" placeholder="Enter your full nmae" class="form-control w-75 mb-2"
                        style={{border: "1px solid black"}} />
                    <div>
                        <p class="profileh5">Experience</p>
                        <input type="radio" />
                        <label for="" class="m-2">Fresher</label>
                        <input type="radio" />
                        <label for="" class="m-2">Experienced</label>
                    </div>


                    <div class="d-flex flex-row">
                        <div class="col-md-4">
                            <label for="" class="profileh5 mb-1">State</label><br />
                            <input type="text" name="" id="" placeholder="Enter your State"
                                class="form-control w-100 p-2 profileselect" style={{border: "1px solid black"}} />
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-4">
                            <label for="" class="profileh5 mb-1">Current location</label><br />
                            <input type="text" name="" id="" placeholder="Enter your Location"
                                class="form-control w-100 p-2 profileselect" style={{border: "1px solid black"}} />
                        </div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="col-md-4">
                            <label for="" class="profileh5 mb-1">Mobile Number</label><br />
                            <input type="text" name="" id="" placeholder="Enter your mobile number"
                                class="form-control w-100 p-2 profileselect" style={{border: "1px solid black"}} />
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-4">
                            <label for="" class="profileh5 mb-1">Email</label><br />
                            <input type="text" name="" id="" placeholder="Enter your Email Address"
                                class="form-control w-100 p-2 profileselect " style={{border: "1px solid black"}}/>
                        </div>
                    </div>
                    <button class="w-25 mt-4 p-2 profilebutton1">Update Details</button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
        </div>
    )
}
export default ProfileCode;