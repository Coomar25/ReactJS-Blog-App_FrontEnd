import { useSelector } from "react-redux";

const HeaderAuthorComponent = () => {
  const { tagsOrCategories, slug, postAllData } = useSelector((state) => state);
  const blogData = postAllData.post;
  console.log("this is header component", blogData);

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="entry-meta align-items-center meta-2 font-small color-muted">
          <p className="mb-5">
            <a className="author-avatar" href="#">
              <img
                className="img-circle"
                src="assets/imgs/authors/author-3.jpg"
                alt=""
              />
            </a>
            By__
            <a href="https://demos.alithemes.com/html/stories/demo/author.html">
              <span className="author-name font-weight-bold">
                {blogData?.author}
              </span>
            </a>
          </p>
          <span className="mr-10"> {blogData?.publicationDate}</span>
          {/* <span className="has-dot"> 8 mins read</span> */}
        </div>
      </div>
      <div className="col-md-6 text-end d-none d-md-inline">
        <ul className="header-social-network d-inline-block list-inline mr-15">
          <li className="list-inline-item text-muted">
            <span>Share this: </span>
          </li>
          <li className="list-inline-item">
            <a
              className="social-icon fb text-xs-center"
              target="_blank"
              href="#"
            >
              <i className="elegant-icon social_facebook"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="social-icon tw text-xs-center"
              target="_blank"
              href="#"
            >
              <i className="elegant-icon social_twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="social-icon pt text-xs-center"
              target="_blank"
              href="#"
            >
              <i className="elegant-icon social_pinterest"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderAuthorComponent;
