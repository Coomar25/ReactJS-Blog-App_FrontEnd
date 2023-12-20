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
      <div class="theme-mode">
        {/* <!-- Start Header --> */}
        <header class="main-header header-style-1 font-heading">
          <div class="header-sticky">
            <div class="container align-self-center position-relative">
              <div class="mobile_menu d-lg-none d-block"></div>
              <div class="main-nav d-none d-lg-block float-start">
                <nav>
                  {/* <!--Desktop menu--> */}
                  <ul class="main-menu d-none d-lg-inline font-small">
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

              <div class="float-end header-tools text-muted font-small">


                <ul class="header-social-network d-inline-block list-inline mr-15">


                  { token ? (<ProfileButton/>) : 
                    (
                      <>
                      <li class="list-inline-item">
                      <a
                        class="social-icon fb text-xs-center"
                        target="_blank"
                        href="#"
                      >
                        <i class="elegant-icon social_facebook"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon tw text-xs-center"
                        target="_blank"
                        href="#"
                      >
                        <i class="elegant-icon social_twitter "></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon pt text-xs-center"
                        target="_blank"
                        href="#"
                      >
                        <i class="elegant-icon social_pinterest "></i>
                      </a>
                    </li>
                      </>
                    )
                  }
                </ul>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
