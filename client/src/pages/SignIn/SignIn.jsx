import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginLottieJSON from '../../assets/lottie/login.json'
import { useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogin from '../shared/SocialLogin';


const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("in signIn page", location);
    const from = location.state || "/";

    const handleSignIn = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      signInUser(email, password)
        .then((result) => {
          console.log("sign in", result.user);
          navigate(from);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={loginLottieJSON}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="ml-8 mt-4 text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered rounded-md"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered rounded-md"
                  required
                />
                <div className="text-right mt-1">
                  <a href="#" className="text-sm text-pink-500 hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                  LOG IN
                </button>
              </div>
                        <div className='divider'></div>
                        <SocialLogin></SocialLogin>
              <p className="mt-4 text-center text-sm">
                Don’t have an account?{" "}
                <a href="./register" className="text-pink-500 hover:underline">
                  Register here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignIn;