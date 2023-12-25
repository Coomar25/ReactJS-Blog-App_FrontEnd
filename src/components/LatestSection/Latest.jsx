import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Latest = () => {
  const [latestpost, setLatestpost] = useState([]);

  useEffect(() => {
    const fetchLatestpost = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/post/latestpost`
        );
        setLatestpost(response.data.latestpost);
      } catch (error) {
        console.error("Error while fetching the latest post", error);
      }
    };
    fetchLatestpost();
  }, []);

  console.log("the latest posts are", latestpost);

  return (
    <div className="post-module-2">
      <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
        <h5 className="mt-5 mb-30">Latest</h5>
      </div>
      <div className="loop-list loop-list-style-1">
        <div className="row">
          {latestpost.slice(0, 4).map((latestblog, index) => (
            <article
              key={index}
              className="col-md-6 mb-40 wow fadeInUp  animated"
            >
              <Link to={`${latestblog?.tagsOrCategories}/${latestblog?.slug}`}>
                <div className="post-card-1 border-radius-10 hover-up">
                  <div
                    className="post-thumb thumb-overlay img-hover-slide position-relative"
                    style={{
                      backgroundImage: `url(${latestblog?.imagesOrMedia})`,
                    }}
                    imagesOrMedia
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
                  <div className="post-content p-30">
                    <div className="entry-meta meta-0 font-small mb-10">
                      <a href="category.html">
                        <span className="post-cat text-info">Artists</span>
                      </a>
                      <a href="category.html">
                        <span className="post-cat text-success">
                          {latestblog?.tagsOrCategories}
                        </span>
                      </a>
                    </div>
                    <div className="d-flex post-card-content">
                      <h5 className="post-title mb-20 font-weight-900">
                        <a href="single.html">{latestblog?.title}</a>
                      </h5>
                      {/* <div className="post-excerpt mb-25 font-small text-muted">
                      <p>
                        <p>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: latestblog?.content.slice(0, 2),
                            }}
                          />
                        </p>
                      </p>
                    </div> */}
                      <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                        <span className="post-on">
                          {latestblog?.publicationDate}
                        </span>
                        {/* <span className="time-reading has-dot">
                        {latestblog?.publicationDate}
                      </span> */}
                        {/* <span className="post-by has-dot">23k views</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Latest;
