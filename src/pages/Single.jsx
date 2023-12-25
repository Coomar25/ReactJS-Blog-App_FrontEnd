import React from "react";
import CatComponent from "../components/CategoryBased/CatComponent";
import OwnerProfile from "../components/HomePageComponents/OwnerProfile";
import MostPopular from "../components/HomePageComponents/MostPopular";

const Single = () => {
  return (
    <div>
      {/* <!-- Start Main content --> */}
      <main>
        {/* <!--archive header--> */}

        <div className="pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="post-module-3">
                  <div className="loop-list loop-list-style-1">
                    <CatComponent />
                  </div>
                </div>
                <div className="pagination-area mb-30 wow fadeInUp animated">
                  <nav aria-label=" Page navigation example">
                    <ul className=" pagination justify-content-start">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="elegant-icon arrow_left"></i>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          01
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          02
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          03
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          04
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="elegant-icon arrow_right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="widget-area">
                  <OwnerProfile />
                  <MostPopular />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- End Main content --> */}
    </div>
  );
};

export default Single;
