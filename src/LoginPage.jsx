import "./Registration.css";

import { Link } from "react-router-dom";

import React from "react";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  let navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  console.log(email);

  const usersData = {
    email: email,

    password: password,
  };
  console.log(usersData);

  const onSubmitBtn = (e) => {
    e.preventDefault();
    if (email && password !== "") {
      axios
        .post("https://pab-server.onrender.com/auth/login", usersData)
        .then((response) => {
          if (response.status === 200) {
            let jwtToken = response.data.token;
            localStorage.setItem("token", jwtToken);

            toast.success("open Home Page", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            setTimeout(function () {
              navigate("/Home");
            }, 3000);
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          window.alert(error.response.data);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  return (
    <div>
      <div className="container5">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="card shadow logincard1">
                <div class="loginheader">
                  <h2 class="loginheader1">Login</h2>
                  <p class="loginpara">
                    It only takes a couple of minutes to get started!
                  </p>
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
                <form className="forms2" onSubmit={onSubmitBtn}>
                  <label className="heading123">Email ID</label>
                  <br />
                  <input
                    type="email"
                    className="p1"
                    placeholder="  Enter your Email ID"
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                  />
                  <br />

                  <label className="heading123">Password</label>
                  <br />
                  <input
                    type="password"
                    className="p1"
                    placeholder="  Enter your Password"
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                  />
                  <br />

                  <button class="Registerbtn">Login</button>
                </form>
                <a href="" style={{ color: "white" }}>
                  <h6 class="loginh4 text-center">Login via OTP</h6>
                </a>
                <span class="logingoogle">
                  <button class="loginbutton2 shadow">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVDA2e7vaSAfhljLBVppf2X0b0OuAxTQZqjYZcemxu6Umeik13cJI3HYISVRfEz9SMQA&usqp=CAU"
                      alt=""
                      class="googleimg"
                    />
                    Sign in with Google
                  </button>
                </span>
              </div>
              <a href="">
                <button class="Register shadow  d-md-none">
                  Register for free
                </button>
              </a>
            </div>

            <div class="col-12 col-md-1"></div>

            <div class="col-12 col-md-4 d-none d-md-block">
              <div class="card shadow logincard2">
                <h2 class="pabjobheading">New to pabjobs?</h2>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                  alt=""
                />
              </div>
              <div class="loginspan1 col-md-10">
                <i class="fa-solid fa-circle-check janlogin text-center"></i>{" "}
                <span class="loginspan">
                  Build your profile and let recruitrs find you
                </span>{" "}
                <br />
                <i class="fa-solid fa-circle-check janlogin"></i>{" "}
                <span class="loginspan">
                  Get job posting delivered right to your email
                </span>{" "}
                <br />
                <i class="fa-solid fa-circle-check janlogin"></i>{" "}
                <span class="loginspan">Find a job and grow your career</span>
                <br />
                <i class="fa-solid fa-circle-check janlogin"></i>{" "}
                <span class="loginspan">Find a job and grow your career</span>
              </div>

              <Link to="/">
                {" "}
                <a href="">
                  <button class="Register shadow ">Register for free</button>
                </a>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
