import React, { useState, useEffect } from "react";
import axios from "axios";

const FeaturesPost = () => {
  const [featuresblogpost, setFeaturesblogpost] = useState([]);
  // console.log(import.meta.env.VITE_API_URL);
  useEffect(() => {
    // Fetch now showing movies from your API endpoint
    const fetchFeaturesBlogPost = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/post/getfeaturespost`
        );
        setFeaturesblogpost(response.data.posts);
        console.log("featuresblogpost:", featuresblogpost);
      } catch (error) {
        console.error("Error fetching features posts data:", error.message);
      }
    };
    fetchFeaturesBlogPost();
  }, []);

  const firstPost = featuresblogpost[0];
  const secondPost = featuresblogpost[1];
  const postToDisplay = featuresblogpost.slice(1, 4);
  console.log('three post', postToDisplay);

  return (
    <div className="row">
      {/* First post */}
      <div className="col-lg-8 mb-30">
        <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated">
          <div className="arrow-cover"></div>
          <div className="slide-fade">
            <div className="position-relative post-thumb">
              <div
                className="thumb-overlay img-hover-slide position-relative"
                style={{ backgroundImage: `url(${firstPost?.imagesOrMedia})` }}
              >
                <a className="img-link" href="single.html"></a>
                <span className="top-left-icon bg-warning">
                  <i className="elegant-icon icon_star_alt"></i>
                </span>
                <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                  <div className="entry-meta meta-0 font-small mb-20">
                    <a href="category.html">
                      <span className="post-cat text-info text-uppercase">
                        {firstPost?.tagsOrCategories}
                      </span>
                    </a>
                  </div>
                  <h3 className="post-title font-weight-900 mb-20">
                    <a className="text-white" href="single.html">
                      {firstPost?.title}
                    </a>
                  </h3>
                  <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                    <span className="post-on">{firstPost?.publicationDate}</span>
                    {/* <span className="hit-count has-dot">23k Views</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <article
        className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
        data-wow-delay="0.2s"
      >
        <div className="post-card-1 border-radius-10 hover-up">
          <div
            className="post-thumb thumb-overlay img-hover-slide position-relative"
            style={{ backgroundImage: `url(${secondPost?.imagesOrMedia})` }}
          >
            <a className="img-link" href="single.html"></a>
            <span className="top-right-icon bg-success">
              <i className="elegant-icon icon_camera_alt"></i>
            </span>
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
                <a className="tw" href="#" target="_blank" title="Tweet now">
                  <i className="elegant-icon social_twitter"></i>
                </a>
              </li>
              <li>
                <a className="pt" href="#" target="_blank" title="Pin it">
                  <i className="elegant-icon social_pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="post-content p-30">
            <div className="entry-meta meta-0 font-small mb-10">
              <a href="category.html">
                <span className="post-cat text-info">
                  {secondPost?.tagsOrCategories}
                </span>
              </a>
              {/* <a href="category.html">
                <span className="post-cat text-success">Food</span>
              </a> */}
            </div>
            <div className="d-flex post-card-content">
              <h5 className="post-title mb-20 font-weight-900">
                <a href="single.html">{firstPost?.title}</a>
              </h5>
              <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                <span className="post-on">{secondPost?.publicationDate}</span>
                {/* <span className="time-reading has-dot"></span> */}
                {/* <span className="post-by has-dot">23k views</span> */}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ==================================================================================================================================== */}
      {/* ================================================================Second Third Fourth Post========================================================== */}
      {/* ==================================================================================================================================== */}

      {postToDisplay.map((post, index) => {
        return (
          <article
          key={index}
          className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
        >
          <div className="post-card-1 border-radius-10 hover-up">
            <div
              className="post-thumb thumb-overlay img-hover-slide position-relative"
              style={{ backgroundImage: `url(${post?.imagesOrMedia})` }}
            >
              <a className="img-link" href="single.html"></a>
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
                  <a className="tw" href="#" target="_blank" title="Tweet now">
                    <i className="elegant-icon social_twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="pt" href="#" target="_blank" title="Pin it">
                    <i className="elegant-icon social_pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="post-content p-30">
              <div className="entry-meta meta-0 font-small mb-10">
                <a href="category.html">
                  <span className="post-cat text-warning">{post?.tagsOrCategories}</span>
                </a>
              </div>
              <div className="d-flex post-card-content">
                <h5 className="post-title mb-20 font-weight-900">
                  <a href="single.html">{post?.title}</a>
                </h5>
                <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                  <span className="post-on">17 July</span>
                  <span className="time-reading has-dot">{post?.publicationDate}</span>
                  {/* <span className="post-by has-dot">12k views</span> */}
                </div>
              </div>
            </div>
          </div>
        </article>
        )
      })}

      {/* ==================================================================================================================================== */}
      {/* ==================================================================================================================================== */}
      {/* ==================================================================================================================================== */}

      {/* <article
        className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
        data-wow-delay="0.2s"
      >
        <div className="post-card-1 border-radius-10 hover-up">
          <div
            className="post-thumb thumb-overlay img-hover-slide position-relative"
            // style="background-image: url(assets/imgs/news/news-5.jpg)"
          >
            <a className="img-link" href="single.html"></a>
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
                <a className="tw" href="#" target="_blank" title="Tweet now">
                  <i className="elegant-icon social_twitter"></i>
                </a>
              </li>
              <li>
                <a className="pt" href="#" target="_blank" title="Pin it">
                  <i className="elegant-icon social_pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="post-content p-30">
            <div className="entry-meta meta-0 font-small mb-10">
              <a href="category.html">
                <span className="post-cat text-danger">Travel</span>
              </a>
            </div>
            <div className="d-flex post-card-content">
              <h5 className="post-title mb-20 font-weight-900">
                <a href="single.html">
                  Life and Death in the Empire of the Tiger
                </a>
              </h5>
              <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                <span className="post-on">7 August</span>
                <span className="time-reading has-dot">15 mins read</span>
                <span className="post-by has-dot">500 views</span>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article
        className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
        data-wow-delay="0.4s"
      >
        <div className="post-card-1 border-radius-10 hover-up">
          <div
            className="post-thumb thumb-overlay img-hover-slide position-relative"
            // style="background-image: url(assets/imgs/news/news-11.jpg)"
          >
            <a className="img-link" href="single.html"></a>
            <span className="top-right-icon bg-info">
              <i className="elegant-icon icon_headphones"></i>
            </span>
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
                <a className="tw" href="#" target="_blank" title="Tweet now">
                  <i className="elegant-icon social_twitter"></i>
                </a>
              </li>
              <li>
                <a className="pt" href="#" target="_blank" title="Pin it">
                  <i className="elegant-icon social_pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="post-content p-30">
            <div className="entry-meta meta-0 font-small mb-10">
              <a href="category.html">
                <span className="post-cat text-success">Lifestyle</span>
              </a>
            </div>
            <div className="d-flex post-card-content">
              <h5 className="post-title mb-20 font-weight-900">
                <a href="single.html">When Two Wheels Are Better Than Four</a>
              </h5>
              <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                <span className="post-on">15 Jun</span>
                <span className="time-reading has-dot">9 mins read</span>
                <span className="post-by has-dot">1.2k views</span>
              </div>
            </div>
          </div>
        </div>
      </article> */}
    </div>
  );
};

export default FeaturesPost;
