const AuthorBox = () => {
  return (
    <>
      {/* <!--author box--> */}
      <div className="author-bio p-30 mt-50 border-radius-10 bg-white wow fadeIn animated">
        <div className="author-image mb-30">
          <a href="https://demos.alithemes.com/html/stories/demo/author.html">
            <img
              src="assets/imgs/authors/author-3.jpg"
              alt=""
              className="avatar"
            />
          </a>
        </div>
        <div className="author-info">
          <h4 className="font-weight-bold mb-20">
            <span className="vcard author">
              <span className="fn">
                <a
                  href="https://demos.alithemes.com/html/stories/demo/author.html"
                  title="Posted by Barbara Cartland"
                  rel="author"
                >
                  Barbara Cartland
                </a>
              </span>
            </span>
          </h4>
          <h5 className="text-muted">About author</h5>
          <div className="author-description text-muted">
            You should write because you love the shape of stories and sentences
            and the creation of different words on a page.
          </div>
          <a
            href="https://demos.alithemes.com/html/stories/demo/author.html"
            className="author-bio-link mb-md-0 mb-3"
          >
            View all posts (125)
          </a>
          <div className="author-social">
            <ul className="author-social-icons">
              <li className="author-social-link-facebook">
                <a href="#" target="_blank">
                  <i className="ti-facebook"></i>
                </a>
              </li>
              <li className="author-social-link-twitter">
                <a href="#" target="_blank">
                  <i className="ti-twitter-alt"></i>
                </a>
              </li>
              <li className="author-social-link-pinterest">
                <a href="#" target="_blank">
                  <i className="ti-pinterest"></i>
                </a>
              </li>
              <li className="author-social-link-instagram">
                <a href="#" target="_blank">
                  <i className="ti-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthorBox;
