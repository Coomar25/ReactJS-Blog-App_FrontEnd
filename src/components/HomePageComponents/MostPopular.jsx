import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MostPopular = () => {
  const [mostpopular, setMostpopular] = useState([]);

  useEffect(() => {
    const fetchMostPopular = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/post/mostpupular`
        );
        setMostpopular(response.data.posts);
      } catch (error) {
        console.error("Error while fetching the latest post", error);
      }
    };
    fetchMostPopular();
  }, []);

  console.log("Most popular blog post is ", mostpopular);
  return (
    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
      <div className="widget-header-1 position-relative mb-30">
        <h5 className="mt-5 mb-30">Most popular</h5>
      </div>
      <div className="post-block-list post-module-1">
        <ul className="list-post">
          {mostpopular.slice(0, 6).map((popularblog, index) => (
            <li key={index} className=" wow fadeInUp animated">
              <Link
                to={`${popularblog?.tagsOrCategories}/${popularblog?.slug}`}
              >
                <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                  <div className="post-content media-body">
                    <h6 className="post-title mb-15 text-limit-2-row font-medium">
                      <a href="single.html">{popularblog?.title}</a>
                    </h6>
                    <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                      <span className="post-by has-dot">
                        {popularblog?.views} Views
                      </span>
                      <br />
                      <br />
                      <span className="post-on">
                        {popularblog?.publicationDate}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                    <a className="color-white" href="single.html">
                      <img src={popularblog?.imagesOrMedia} alt="" />
                    </a>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MostPopular;
