const MostPopular = () => {
  return (
    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
      <div className="widget-header-1 position-relative mb-30">
        <h5 className="mt-5 mb-30">Most popular</h5>
      </div>
      <div className="post-block-list post-module-1">
        <ul className="list-post">
          <li className="mb-30 wow fadeInUp animated">
            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
              <div className="post-content media-body">
                <h6 className="post-title mb-15 text-limit-2-row font-medium">
                  <a href="single.html">
                    Spending Some Quality Time with Kids? It’s Possible
                  </a>
                </h6>
                <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                  <span className="post-on">05 August</span>
                  <span className="post-by has-dot">150 views</span>
                </div>
              </div>
              <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                <a className="color-white" href="single.html">
                  <img src="assets/imgs/news/thumb-6.jpg" alt="" />
                </a>
              </div>
            </div>
          </li>
          <li className="mb-30 wow fadeInUp animated">
            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
              <div className="post-content media-body">
                <h6 className="post-title mb-15 text-limit-2-row font-medium">
                  <a href="single.html">
                    Relationship Podcasts are Having “That” Talk
                  </a>
                </h6>
                <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                  <span className="post-on">12 August</span>
                  <span className="post-by has-dot">6k views</span>
                </div>
              </div>
              <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                <a className="color-white" href="single.html">
                  <img src="assets/imgs/news/thumb-7.jpg" alt="" />
                </a>
              </div>
            </div>
          </li>
          <li className="mb-30 wow fadeInUp animated">
            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
              <div className="post-content media-body">
                <h6 className="post-title mb-15 text-limit-2-row font-medium">
                  <a href="single.html">
                    Here’s How to Get the Best Sleep at Night
                  </a>
                </h6>
                <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                  <span className="post-on">15 August</span>
                  <span className="post-by has-dot">16k views</span>
                </div>
              </div>
              <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                <a className="color-white" href="single.html">
                  <img src="assets/imgs/news/thumb-2.jpg" alt="" />
                </a>
              </div>
            </div>
          </li>
          <li className=" wow fadeInUp animated">
            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
              <div className="post-content media-body">
                <h6 className="post-title mb-15 text-limit-2-row font-medium">
                  <a href="single.html">
                    America’s Governors Get Tested for a Virus That Is Testing
                    Them
                  </a>
                </h6>
                <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                  <span className="post-on">12 August</span>
                  <span className="post-by has-dot">3k views</span>
                </div>
              </div>
              <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                <a className="color-white" href="single.html">
                  <img src="assets/imgs/news/thumb-3.jpg" alt="" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MostPopular;
