import "./Registration.css";
import logo2 from "../src/All Images/side-image.avif";
import logo from "../src/All Images/pab bottom-logo (1).jpg";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Registration() {
  const [Typesection, setSelectedType] = useState("applicant");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [phone, setphone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  let navigate = useNavigate();
  const [data, setdata] = useState([]);

  const validateInputs = () => {
    let isValid = true;

    if (!name.match(/^[a-zA-Z\s]*$/)) {
      setNameError("Name should contain only letters and spaces");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!phone.match(/^[6789]\d{9}$/)) {
      setPhoneError("Phone number should start with 6, 7, 8, or 9 and have 10 digits");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (password.length < 6 || password.length > 8) {
      setPasswordError("Password should be 6 to 8 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (password !== confirmpassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  };

  console.log(name);

  const usersData = {
    Typesection: Typesection,
    name: name,
    email: email,
    contactNumber: phone,
    password: password,
    originalPassword: confirmpassword,
  };

  console.log(usersData);

  

  // const onSubmitForm = (e) => {
  //   e.preventDefault();
  //   if (
  //     Typesection &&
  //     name &&
  //     email &&
  //     phone &&
  //     password &&
  //     confirmpassword !== ""
  //   ) {
  //     axios
  //       .post("http://localhost:4005/RegistrationDetails", usersData)
  //       .then((response) => {
  //         setdata(response.data);

  //         console.log(response.data);
  //         if (response.status === 200) {
  //           toast.success("Registration Successfull", {
  //             position: "top-right",
  //             autoClose: 1000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "colored",
  //           });

  //           setTimeout(function () {
  //             navigate("/LoginPage");
  //           }, 3000);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   } else {
  //     toast.warning("Enter the Required Details");
  //   }
  // };
  const onSubmitForm = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      const usersData = {
        Typesection: Typesection,
        name: name,
        email: email,
        contactNumber: phone,
        password: password,
        originalPassword: confirmpassword,
      };
      

      axios
        .post("http://localhost:4005/RegistrationDetails", usersData)
        .then((response) => {
          console.log(response.data);
          if (response.status === 200) {
            toast.success("Registration Successful", {
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
      toast.warning("Enter valid details");
    }
  };

  console.log(Typesection);
  const [buttonOpacity, setButtonOpacity] = useState({
    jobSeekers: 1,
    recruiters: 0.4,
  });
  const handleTypeChange = (e) => {
    const type = e.target.value;
    setSelectedType(type);

    if (type === "applicant") {
      setButtonOpacity({ jobSeekers: 1, recruiters: 0.4 });
    } else if (type === "recruiter") {
      setButtonOpacity({ jobSeekers: 0.4, recruiters: 1 });
    }
  };

  return (
    <div>
      <nav class="navbar navbar-expand-sm">
        <div class="container">
          <img src={logo} alt="logo" width="200px" />
        </div>
      </nav>
      <div class=" card container maincontent text-start">
        <div class="row">
          <div class="d-flex flex-row col-12 col-md-7">
            <div class=" card  mx-5 my-3 mb-5" style={{ borderRadius: "20px" }}>
              <h2 class="heading1">Create an account</h2>
              <p class="para2">
                It only takes a couple of minutes to get started!
              </p>
              <div class="d-flex flex-row">
                <Link to="/LoginPage">
                  {" "}
                  <a href="">
                    {" "}
                    <button type="button" class="b21">
                      {" "}
                      Login
                    </button>
                  </a>
                </Link>
                <button type="button" class="b2" id="Jobbtn">
                  Sign Up
                  {/* <input type="radio" name="type" id="" className="mx-2" /> */}
                  <i class="fa-solid fa-circle-check mx-2 circle-12"></i>
                </button>
              </div>

              <div className="d-flex flex-row">
                <button
                  type="button"
                  className="b2"
                  id="Jobbtn"
                  style={{ opacity: buttonOpacity.jobSeekers }}
                >
                  Job Seekers
                  <input
                    type="radio"
                    name="type"
                    value="applicant"
                    onChange={handleTypeChange}
                    className="mx-2"
                    checked={Typesection === "applicant"}
                  />
                </button>
                <button
                  type="button"
                  className="b2"
                  id="Jobbtn"
                  style={{ opacity: buttonOpacity.recruiters }}
                >
                  Recruiters
                  <input
                    type="radio"
                    name="type"
                    value="recruiter"
                    onChange={handleTypeChange}
                    className="mx-2"
                    checked={Typesection === "recruiter"}
                  />
                </button>
              </div>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              {/* Same as */}
              <ToastContainer />

              <form className="forms2 px-3" onSubmit={onSubmitForm}>
                <label className="heading2">
                  {Typesection === "applicant" ? "Fullname" : "Company Name"}
                </label>
                <br />

                <input
                  type="text"
                  className="p121"
                  placeholder={
                    Typesection === "applicant"
                      ? "Enter your full name"
                      : "Enter Company Name"
                  }
                  style={{ border: "1px solid black" }}
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                />
                 <span className="error">{nameError}</span>
                <br />

                <label className="heading2">Email ID</label>
                <br />
                <input
                  type="email"
                  className="p1"
                  placeholder="  Enter your Email ID"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
                <br />
                {/* //siva */}

                <label className="heading2">Password</label>
                <br />
                <input
                  type="password"
                  className="p1"
                  placeholder="  Enter your Password"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
                 <span className="error">{passwordError}</span>
                <br />

                <label className="heading2">Confirm Password</label>
                <br />
                <input
                  type="password"
                  className="p1"
                  placeholder="  Enter your  Confirm Password"
                  onChange={(e) => setconfirmpassword(e.target.value)}
                  value={confirmpassword}
                />
                <span className="error">{confirmPasswordError}</span>
                <br />

                <label className="heading2">Mobile Number</label>
                <br />
                <select style={{ marginLeft: "10px" }}>
                  <option>+91</option>
                </select>
                <input
                  type="text"
                  className="pp1"
                  placeholder="  Enter your Mobile Number"
                  style={{ border: "1px solid black" }}
                  onChange={(e) => setphone(e.target.value)}
                  value={phone}
                />
                <span className="error">{phoneError}</span>
                <br />

                <p>
                  <i
                    class="fa-sharp fa-solid fa-circle-check"
                    style={{ color: "green" }}
                  />{" "}
                  I would like to get latest updates on Whatsapp
                </p>
                <p class="para3" style={{ marginLeft: "2px" }}>
                  By Clicking Register, you agree to the Terms and Conditions &
                  Privacy policy of pabjobs.com
                </p>
                <button class="Registerbtn">Register Now</button>
              </form>

              <div>
                <p class="para1  d-md-none">
                  Already Registration? <span class="span1">Login</span> here
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 remove">
            <img src={logo2} alt="pic" class="image2" />
            <p class="para4">
              <i class="fa-solid fa-circle-check"></i> Build your profile and
              let recruiters find you
            </p>

            <p class="para4">
              <i class="fa-solid fa-circle-check"></i>
              Get job posting delivered right to your email
            </p>

            <p class="para4">
              <i class="fa-solid fa-circle-check"></i> Find a job and grow your
              career
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registration;
