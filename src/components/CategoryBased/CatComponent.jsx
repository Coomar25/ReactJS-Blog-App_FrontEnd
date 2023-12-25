import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CatComponent = () => {
  const [categorybased, setCategorybased] = useState([]);
  useEffect(() => {
    const fetchingCategorybased = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/post/programming`
        );
        setCategorybased(response.data.post);
      } catch (error) {
        console.error("Error while fetching the category based post", error);
      }
    };

    fetchingCategorybased();
  }, []);

  console.log("category based posts", categorybased);

  return (
    <>
      {categorybased.map((catbased, index) => (
        <article className="hover-up-2 transition-normal wow fadeInUp animated">
          <Link to={`${catbased?.tagsOrCategories}/${catbased?.slug}`}>
            <div className="row mb-40 list-style-2">
              <div className="col-md-4">
                <div className="post-thumb position-relative border-radius-5">
                  <div
                    className="img-hover-slide border-radius-5 position-relative"
                    //  style="background-image: url(assets/imgs/news/news-13.jpg)"
                    style={{
                      backgroundImage: `url(${catbased?.imagesOrMedia})`,
                    }}
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
                      <a className="pt" href="#" target="_blank" title="Pin it">
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
                      <span className="post-cat text-primary">
                        {catbased?.tagsOrCategories}
                      </span>
                    </a>
                  </div>
                  <h5 className="post-title font-weight-900 mb-20">
                    <a href="single.html">{catbased?.title}</a>
                    <span className="post-format-icon">
                      <i className="elegant-icon icon_star_alt"></i>
                    </span>
                  </h5>
                  <div className="entry-meta meta-1 float-start font-x-small text-uppercase">
                    <span className="post-on">{catbased?.publicationDate}</span>
                    <span className="time-reading has-dot">11 mins read</span>
                    <span className="post-by has-dot">
                      {catbased?.views} Views
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
};
export default CatComponent;
