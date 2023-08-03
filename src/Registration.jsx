import "./Registration.css";
import logo2 from "../src/All Images/side-image.avif";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Registration() {
  const [type, settype] = useState("applicant");

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [phone, setphone] = useState("");

  let navigate = useNavigate();
  const [data, setdata] = useState([]);

  console.log(name);

  const usersData = {
    type: type,
    name: name,
    email: email,
    contactNumber: phone,
    password: password,
    originalPassword: confirmpassword,
  };

  console.log(usersData);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (name && email && phone && password && confirmpassword !== "") {
      axios
        .post("https://pab-server.onrender.com/auth/signup", usersData)
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

  console.log(type);

  return (
    <div>
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
                    <button type="button" class="b2">
                      {" "}
                      Login
                    </button>
                  </a>
                </Link>
                <button type="button" class="b2" id="Jobbtn">
                  Sign Up
                  <input type="radio" name="type" id="" className="mx-2" />
                </button>
              </div>
              <div class="d-flex flex-row">
                <button type="button" class="b2" id="Jobbtn">
                  Job Seekers
                  <input
                    type="radio"
                    name="type"
                    value="applicant"
                    onChange={(e) => settype(e.target.value)}
                    className="mx-2"
                  />
                </button>
                <button type="button" class="b2" id="Jobbtn">
                  Recruiters
                  <input
                    type="radio"
                    name="type"
                    value="recruiter"
                    onChange={(e) => settype(e.target.value)}
                    className="mx-2"
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

              <form className="forms2" onSubmit={onSubmitForm}>
                <label className="heading2">
                  {type === "applicant" ? "Fullname" : "Company Name"}
                </label>
                <br />

                <input
                  type="text"
                  className="p121"
                  placeholder={
                    type === "applicant"
                      ? "Enter your full name"
                      : "Enter Company Name"
                  }
                  style={{ border: "1px solid black" }}
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                />
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

                <label className="heading2">Password</label>
                <br />
                <input
                  type="password"
                  className="p1"
                  placeholder="  Enter your Password"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
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
                <br />

                <div id="gender1">
                  <label class="heading2">Gender</label>
                  <br />
                  <input type="radio" class="l1" name="gender" />
                  Male
                  <input type="radio" class="l1" name="gender" />
                  Female
                  <input type="radio" class="l1" name="gender" />
                  prefex not to saybr
                  <br />
                  <br />
                </div>
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
              <i class="fa-solid fa-circle-check" style={{ color: "blue" }}></i>{" "}
              Build your profile and let recruiters find you
            </p>

            <p class="para4">
              <i class="fa-solid fa-circle-check" style={{ color: "blue" }}></i>
              Get job posting delivered right to your email
            </p>

            <p class="para4">
              <i class="fa-solid fa-circle-check" style={{ color: "blue" }}></i>{" "}
              Find a job and grow your career
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registration;
