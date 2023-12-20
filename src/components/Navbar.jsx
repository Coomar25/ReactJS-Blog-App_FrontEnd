import React from "react";
import "../public/AliAssets/css/style.css";
import "../public/AliAssets/css/widgets.css";
import "../public/AliAssets/css/dark.css";
import "../public/AliAssets/css/responsive.css";
import { Link } from "react-router-dom";
import Register from "../pages/Register";
import { getTokenFromCookie } from "../service/TokenService";
import ProfileButton from "./ProfileButton";

const Navbar = () => {
  const { token } = getTokenFromCookie();
  return (
    <div>
      <div className="theme-mode">
        {/* <!-- Start Header --> */}
        <header className="main-header header-style-1 font-heading">
          <div className="header-sticky">
            <div className="container align-self-center position-relative">
              <div className="mobile_menu d-lg-none d-block"></div>
              <div className="main-nav d-none d-lg-block float-start">
                <nav>
                  {/* <!--Desktop menu--> */}
                  <ul className="main-menu d-none d-lg-inline font-small">
                    <li>
                      <Link to="/"> Home </Link>
                    </li>
                    <li>
                      <Link to="/single">Single</Link>
                    </li>
                    {/* ========================================================================================================== */}
                    {/* =========================================== Conditiona Navbar here ======================================= */}
                    {/* ========================================================================================================== */}

                    {token ? (
                      <li>
                        <Link to="/Write">Write</Link>
                      </li>
                    ) : null}

                    {token ? null : (
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                    )}

                    {token ? null : (
                       <li>
                       {}
                       <Link to="/register">
                         <Register />
                       </Link>
                     </li>
                    )}

                   
                  </ul>

                 
                </nav>
              </div>

              <div className="float-end header-tools text-muted font-small">


                <ul className="header-social-network d-inline-block list-inline mr-15">


                  { token ? (<ProfileButton/>) : 
                    (
                      <>
                      <li className="list-inline-item">
                      <a
                        className="social-icon fb text-xs-center"
                        target="_blank"
                        href="#"
                      >
                        <i className="elegant-icon social_facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="social-icon tw text-xs-center"
                        target="_blank"
                        href="#"
                      >
                        <i className="elegant-icon social_twitter "></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="social-icon pt text-xs-center"
                        target="_blank"
                        href="#"
                      >
                        <i className="elegant-icon social_pinterest "></i>
                      </a>
                    </li>
                      </>
                    )
                  }
                </ul>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
