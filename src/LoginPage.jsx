import "./Registration.css";
 
import { Link } from "react-router-dom";

function LoginPage() { 
  return (
<div>

    <div className="container5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="card shadow logincard1">
                        <div class="loginheader">
                            <h2 class="loginheader1">Login</h2>
                            <p class="loginpara">It only takes a couple of minutes to get started!</p>
                        </div>
                        <label for="" class="loginemail text-start">Email ID</label>
                        <input type="text" name="" id="" class="logininput" placeholder="enter your email ID" />
                        <label for="" class="loginpassword  text-start">password</label>
                        <input type="password" class="logininput" placeholder="enter your password" /><i
                            class="fa-solid fa-eye eyeicon"></i>    
                        <a href="./ForgetPassword.html" style={{color: "white"}}>
                            <p class="loginforgot" style={{marginLeft: "70%"}} id="submitforget">Forgot password?</p>
                        </a>
                      <Link to ="/Home"> <a href="./home10/home.html"><button class="loginbutton">Login</button></a></Link> 
                        <a href="" style={{color: "white"}}>
                            <h6 class="loginh4 text-center">Login via OTP</h6>
                        </a>
                        <span class="logingoogle">
                            <button class="loginbutton2 shadow"><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVDA2e7vaSAfhljLBVppf2X0b0OuAxTQZqjYZcemxu6Umeik13cJI3HYISVRfEz9SMQA&usqp=CAU"
                                    alt="" class="googleimg" />Sign in with Google</button></span>

                    </div>
                    <a href=""><button class="Register shadow  d-md-none">Register for
                            free</button></a>
                </div>

                <div class="col-12 col-md-1">

                </div>

                <div class="col-12 col-md-4 d-none d-md-block">
                    <div class="card shadow logincard2">
                        <h2 class="pabjobheading">New to pabjobs?</h2>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                            alt="" />
                    </div>
                    <div class="loginspan1 col-md-10">
                        <i class="fa-solid fa-circle-check janlogin text-center"></i> <span class="loginspan">Build your profile and let recruitrs find you</span> <br />
                        <i class="fa-solid fa-circle-check janlogin"></i> <span class="loginspan">Get job posting delivered right to your email</span> <br />
                        <i class="fa-solid fa-circle-check janlogin"></i> <span class="loginspan">Find a job and
                            grow
                            your
                            career</span><br />
                        <i class="fa-solid fa-circle-check janlogin"></i> <span class="loginspan">Find a job and
                            grow
                            your
                            career</span>
                    </div>


                   <Link to = "/"> <a href=""><button class="Register shadow ">Register for free</button></a> </Link>
                </div>




            </div>
        </div>
        </div>
       
      
    </div>
    
    
    )
}
export default LoginPage
