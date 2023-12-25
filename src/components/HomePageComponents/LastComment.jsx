const LastComment = () => {
  return (
    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
      <div className="widget-header-1 position-relative mb-30">
        <h5 className="mt-5 mb-30">Last comments</h5>
      </div>
      <div className="post-block-list post-module-2">
        <ul className="list-post">
          <li className="mb-30 wow fadeInUp animated">
            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
              <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                <a className="color-white" href="single.html">
                  <img src="assets/imgs/authors/author-2.jpg" alt="" />
                </a>
              </div>
              <div className="post-content media-body">
                <p className="mb-10">
                  <a href="https://demos.alithemes.com/html/stories/demo/author.html">
                    <strong>David</strong>
                  </a>
                  <span className="ml-15 font-small text-muted has-dot">
                    16 Jan 2023
                  </span>
                </p>
                <p className="text-muted font-small">
                  A writer is someone for whom writing is more difficult than...
                </p>
              </div>
            </div>
          </li>
          <li className="mb-30 wow fadeInUp animated">
            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
              <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                <a className="color-white" href="single.html">
                  <img src="assets/imgs/authors/author-3.jpg" alt="" />
                </a>
              </div>
              <div className="post-content media-body">
                <p className="mb-10">
                  <a href="https://demos.alithemes.com/html/stories/demo/author.html">
                    <strong>Kokawa</strong>
                  </a>
                  <span className="ml-15 font-small text-muted has-dot">
                    12 Feb 2023
                  </span>
                </p>
                <p className="text-muted font-small">
                  Striking pewter studded epaulettes silver zips
                </p>
              </div>
            </div>
          </li>
          <li className="wow fadeInUp animated">
            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
              <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                <a className="color-white" href="single.html">
                  <img src="assets/imgs/news/thumb-1.jpg" alt="" />
                </a>
              </div>
              <div className="post-content media-body">
                <p className="mb-10">
                  <a href="https://demos.alithemes.com/html/stories/demo/author.html">
                    <strong>Tsukasi</strong>
                  </a>
                  <span className="ml-15 font-small text-muted has-dot">
                    18 May 2023
                  </span>
                </p>
                <p className="text-muted font-small">
                  Workwear bow detailing a slingback buckle strap
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default LastComment;
