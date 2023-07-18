import './Registration.css'
import logo2 from '../src/All Images/side-image.avif';


function LoginPage() {
    return (
        <div>
            <div class="container5 text-start">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <div class="card shadow logincard1">
                                <div class="loginheader">
                                    <h2 class="loginheader1">Login</h2>
                                    <p class="loginpara">It only takes a couple of minutes to get started!</p>
                                </div>
                                <form className='forms2'>

                                    <label className='heading2'>Email ID</label><br />
                                    <input type="email" className='p1 p-1 m-1' placeholder='Enter your Email ID' /><br />

                                    <label className='heading2'>Password</label><br />
                                  <input type="password" className='p1 p-1 m-1 'placeholder='Enter your password' /><i
                            class="fa-solid fa-eye eyeicon"></i>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default LoginPage;