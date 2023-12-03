import React from "react";
import "../public/AliAssets/css/style.css";
import "../public/AliAssets/css/widgets.css";
import "../public/AliAssets/css/dark.css";
import "../public/AliAssets/css/responsive.css";
import { Link } from "react-router-dom";
import Register from "../pages/Register";

const Navbar = () => {
  return (
    <div>
      <div class="theme-mode">
        <aside id="sidebar-wrapper" class="custom-scrollbar offcanvas-sidebar">
          <button class="off-canvas-close">
            <i class="elegant-icon icon_close"></i>
          </button>
          <div class="sidebar-inner">
            {/* <!--Categories--> */}
            <div class="sidebar-widget widget_categories mb-50 mt-30">
              <div class="widget-header-2 position-relative">
                <h5 class="mt-5 mb-15">Hot topics</h5>
              </div>
              <div class="widget_nav_menu">
                <ul>
                  <li class="cat-item cat-item-2">
                    <a href="category.html">Travel tips</a>{" "}
                    <span class="post-count">30</span>
                  </li>
                  <li class="cat-item cat-item-3">
                    <a href="category-grid.html">Book review</a>{" "}
                    <span class="post-count">25</span>
                  </li>
                  <li class="cat-item cat-item-4">
                    <a href="category-list.html">Hotel review</a>{" "}
                    <span class="post-count">16</span>
                  </li>
                  <li class="cat-item cat-item-5">
                    <a href="category-masonry.html">Destinations </a>{" "}
                    <span class="post-count">22</span>
                  </li>
                  <li class="cat-item cat-item-6">
                    <a href="category-big.html">Lifestyle</a>{" "}
                    <span class="post-count">25</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--Latest--> */}
            <div class="sidebar-widget widget-latest-posts mb-50">
              <div class="widget-header-2 position-relative mb-30">
                <h5 class="mt-5 mb-30">Don't miss</h5>
              </div>
              <div class="post-block-list post-module-1 post-module-5">
                <ul class="list-post">
                  <li class="mb-30">
                    <div class="d-flex hover-up-2 transition-normal">
                      <div class="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                        <a class="color-white" href="single.html">
                          <img src="assets/imgs/news/thumb-1.jpg" alt="" />
                        </a>
                      </div>
                      <div class="post-content media-body">
                        <h6 class="post-title mb-15 text-limit-2-row font-medium">
                          <a href="single.html">
                            The Life of a Travel Writer with David Farley
                          </a>
                        </h6>
                        <div class="entry-meta meta-1 float-start font-x-small text-uppercase">
                          <span class="post-on">05 August</span>
                          <span class="post-by has-dot">300 views</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="mb-30">
                    <div class="d-flex hover-up-2 transition-normal">
                      <div class="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                        <a class="color-white" href="single.html">
                          <img src="assets/imgs/news/thumb-2.jpg" alt="" />
                        </a>
                      </div>
                      <div class="post-content media-body">
                        <h6 class="post-title mb-15 text-limit-2-row font-medium">
                          <a href="single.html">
                            Why Don’t More Black American Women Travel Solo?
                          </a>
                        </h6>
                        <div class="entry-meta meta-1 float-start font-x-small text-uppercase">
                          <span class="post-on">12 August</span>
                          <span class="post-by has-dot">23k views</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="mb-30">
                    <div class="d-flex hover-up-2 transition-normal">
                      <div class="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                        <a class="color-white" href="single.html">
                          <img src="assets/imgs/news/thumb-3.jpg" alt="" />
                        </a>
                      </div>
                      <div class="post-content media-body">
                        <h6 class="post-title mb-15 text-limit-2-row font-medium">
                          <a href="single.html">
                            The 22 Best Things to See and Do in Bangkok
                          </a>
                        </h6>
                        <div class="entry-meta meta-1 float-start font-x-small text-uppercase">
                          <span class="post-on">27 August</span>
                          <span class="post-by has-dot">23k views</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--Ads--> */}
            <div class="sidebar-widget widget-ads">
              <div class="widget-header-2 position-relative mb-30">
                <h5 class="mt-5 mb-30">Advertise banner</h5>
              </div>
              <a
                href="https://themeforest.net/user/alithemes/portfolio"
                target="_blank"
              >
                <img
                  class="advertise-img border-radius-5"
                  src="assets/imgs/ads/ads-1.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </aside>

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
                      <Link to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/single">
                        Single
                      </Link>
                    </li>
                    <li>
                      <Link to="/Write">
                        Write
                      </Link>
                    </li>
                
                    <li>
                      <Link to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      {}
                      <Link to="/register">
                        <Register/>
                      </Link>
                    </li>
                  </ul>






                  {/* <!--Mobile menu--> */}
                  <ul id="mobile-menu" class="d-block d-lg-none text-muted">
                    <li class="menu-item-has-children">
                      <a href="index.html">Home</a>
                      <ul class="sub-menu text-muted font-small">
                        <li>
                          <a href="index.html">Home default</a>
                        </li>
                        <li>
                          <a href="home-2.html">Homepage 2</a>
                        </li>
                        <li>
                          <a href="home-3.html">Homepage 3</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul class="sub-menu font-small">
                        <li>
                          <a href="page-about.html">About</a>
                        </li>
                        <li>
                          <a href="page-contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="page-typography.html">Typography</a>
                        </li>
                        <li>
                          <a href="page-register.html">Register</a>
                        </li>
                        <li>
                          <a href="page-login.html">Login</a>
                        </li>
                        <li>
                          <a href="page-search.html">Search</a>
                        </li>
                        <li>
                          <a href="page-author.html">Author</a>
                        </li>
                        <li>
                          <a href="page-404.html">404 page</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Category</a>
                      <ul class="sub-menu font-small">
                        <li>
                          <a href="category-list.html">List layout</a>
                        </li>
                        <li>
                          <a href="category-grid.html">Grid layout</a>
                        </li>
                        <li>
                          <a href="category-masonry.html">Masonry layout</a>
                        </li>
                        <li>
                          <a href="category-big.html">Big layout</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Single post</a>
                      <ul class="sub-menu font-small">
                        <li>
                          <a href="single.html">Default</a>
                        </li>
                        <li>
                          <a href="single-2.html">Big image</a>
                        </li>
                        <li>
                          <a href="single-3.html">Left image</a>
                        </li>
                        <li>
                          <a href="single-4.html">With sidebar</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="float-end header-tools text-muted font-small">
                <ul class="header-social-network d-inline-block list-inline mr-15">
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
                </ul>
                <div class="off-canvas-toggle-cover d-inline-block">
                  <div
                    class="off-canvas-toggle hidden d-inline-block"
                    id="off-canvas-toggle"
                  >
                    <span></span>
                  </div>
                </div>
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
