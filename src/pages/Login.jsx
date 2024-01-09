import React, { useState } from "react";
import "../public/css/bootstrap.min.css";
import "../public/css/app.min.css";
import logoImage from "../public/images/logo-dark.png";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { setTokenInCookie } from "../service/TokenService";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      const token = response.data.token;
      const user = response.data.user;
      console.log(token);
      console.log(user);
      setTokenInCookie(token, user);
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log("Login Failed", error);
    }
  };

  return (
    <div className="loginSection">
      <div className="home-btn d-none d-sm-block">
        <a href="index.html">
          <i className="fas fa-home h2 text-white"></i>
        </a>
      </div>

      <div className="account-pages w-100 mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card mb-0">
                <div className="card-body p-4">
                  <div className="account-box">
                    <div className="account-logo-box">
                      <div className="text-center">
                        <a href="index.html">
                          <img
                            src="https://acad.xlri.ac.in/evening/images/login.svg"
                            alt=""
                            height="240"
                          />
                        </a>
                      </div>
                      <h5 className="text-uppercase mb-1 mt-4">Sign In</h5>
                      <p className="mb-0">Login to your Admin account</p>
                    </div>

                    <div className="account-content mt-4">
                      <form className="form-horizontal" action="#">
                        <div className="form-group row">
                          <div className="col-12">
                            <label htmlFor="emailaddress">Email address</label>
                            <input
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              name="email"
                              type="email"
                              id="emailaddress"
                              required=""
                              placeholder="john@deo.com"
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <div className="col-12">
                            <a
                              href="page-recoverpw.html"
                              className="text-muted float-right"
                            >
                              <small>Forgot your password?</small>
                            </a>
                            <label htmlFor="password">Password</label>
                            <input
                              className="form-control"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              name="password"
                              type="password"
                              required=""
                              id="password"
                              placeholder="Enter your password"
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <div className="col-12">
                            <div className="checkbox checkbox-success">
                              <input
                                id="remember"
                                type="checkbox"
                                defaultChecked={false}
                              />
                              <label htmlFor="remember">Remember me</label>
                            </div>
                          </div>
                        </div>

                        <div className="form-group row text-center mt-2">
                          <div className="col-12">
                            <button
                              onClick={handleSubmitForm}
                              className="btn btn-md btn-block btn-primary waves-effect waves-light"
                              type="submit"
                            >
                              Sign In
                            </button>
                          </div>
                        </div>
                      </form>

                      <div className="row mt-4 pt-2">
                        <div className="col-sm-12 text-center">
                          <p className="text-muted mb-0">
                            Don't have an account?{" "}
                            <a
                              href="page-register.html"
                              className="text-dark ml-1"
                            >
                              <b>Sign Up</b>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
