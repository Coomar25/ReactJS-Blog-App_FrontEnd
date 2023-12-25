const OwnerProfile = () => {
  return (
    <>
      <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated">
        <img
          className="about-author-img mb-25"
          src="assets/imgs/authors/author.jpg"
          alt=""
        />
        <h5 className="mb-20">Hello, I'm Steven</h5>
        <p className="font-medium text-muted">
          Hi, Im Stenven, a Florida native, who left my career in corporate
          wealth management six years ago to embark on a summer of soul
          searching that would change the course of my life forever.
        </p>
        <strong>Follow me: </strong>
        <ul className="header-social-network d-inline-block list-inline color-white mb-20">
          <li className="list-inline-item">
            <a className="fb" href="#" target="_blank" title="Facebook">
              <i className="elegant-icon social_facebook"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="tw" href="#" target="_blank" title="Tweet now">
              <i className="elegant-icon social_twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="pt" href="#" target="_blank" title="Pin it">
              <i className="elegant-icon social_pinterest"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default OwnerProfile;
