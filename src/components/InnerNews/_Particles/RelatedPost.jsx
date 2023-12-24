export const RelatedPost = () => {
  return (
    <>
      {/* <!--related posts--> */}
      <div className="related-posts">
        <div className="post-module-3">
          <div className="widget-header-2 position-relative mb-30">
            <h5 className="mt-5 mb-30">Related posts</h5>
          </div>
          <div className="loop-list loop-list-style-1">
            <article className="hover-up-2 transition-normal wow fadeInUp animated">
              <div className="row mb-40 list-style-2">
                <div className="col-md-4">
                  <div className="post-thumb position-relative border-radius-5">
                    <div
                      className="img-hover-slide border-radius-5 position-relative"
                      //     style="
                      //   background-image: url(assets/imgs/news/news-13.jpg);
                      // "
                    >
                      <a className="img-link" href="single.html"></a>
                    </div>
                    <ul className="social-share">
                      <li>
                        <a href="#">
                          <i className="elegant-icon social_share"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="fb"
                          href="#"
                          title="Share on Facebook"
                          target="_blank"
                        >
                          <i className="elegant-icon social_facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="tw"
                          href="#"
                          target="_blank"
                          title="Tweet now"
                        >
                          <i className="elegant-icon social_twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        >
                          <i className="elegant-icon social_pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8 align-self-center">
                  <div className="post-content">
                    <div className="entry-meta meta-0 font-small mb-10">
                      <a href="category.html">
                        <span className="post-cat text-primary">Food</span>
                      </a>
                    </div>
                    <h5 className="post-title font-weight-900 mb-20">
                      <a href="single.html">
                        Helpful Tips for Working from Home as a Freelancer
                      </a>
                      <span className="post-format-icon">
                        <i className="elegant-icon icon_star_alt"></i>
                      </span>
                    </h5>
                    <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                      <span className="post-on">7 August</span>
                      <span className="time-reading has-dot">11 mins read</span>
                      <span className="post-by has-dot">3k views</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="hover-up-2 transition-normal wow fadeInUp animated">
              <div className="row mb-40 list-style-2">
                <div className="col-md-4">
                  <div className="post-thumb position-relative border-radius-5">
                    <div
                      className="img-hover-slide border-radius-5 position-relative"
                      style={
                        {
                          //  background-image: url(assets/imgs/news/news-4.jpg);
                        }
                      }
                    >
                      <a className="img-link" href="single.html"></a>
                    </div>
                    <ul className="social-share">
                      <li>
                        <a href="#">
                          <i className="elegant-icon social_share"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="fb"
                          href="#"
                          title="Share on Facebook"
                          target="_blank"
                        >
                          <i className="elegant-icon social_facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="tw"
                          href="#"
                          target="_blank"
                          title="Tweet now"
                        >
                          <i className="elegant-icon social_twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        >
                          <i className="elegant-icon social_pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8 align-self-center">
                  <div className="post-content">
                    <div className="entry-meta meta-0 font-small mb-10">
                      <a href="category.html">
                        <span className="post-cat text-success">Cooking</span>
                      </a>
                    </div>
                    <h5 className="post-title font-weight-900 mb-20">
                      <a href="single.html">
                        10 Easy Ways to Be Environmentally Conscious At Home
                      </a>
                    </h5>
                    <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                      <span className="post-on">27 Sep</span>
                      <span className="time-reading has-dot">10 mins read</span>
                      <span className="post-by has-dot">22k views</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
