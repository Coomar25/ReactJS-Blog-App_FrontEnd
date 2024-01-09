const OwnerProfile = () => {
  return (
    <>
      <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated">
        <img
          className="about-author-img mb-25"
          src="https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/393857726_2126039397761509_7434000108516865369_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=kGbYuQ3DATQAX_cVBLY&_nc_ht=scontent.fktm6-1.fna&oh=00_AfDfOeJ62CcDsGAgvwpiHxAkIXquCFvdC3UFKWpT89Cwhw&oe=658E04BE"
          alt=""
        />
        <h5 className="mb-20">Hello, I'm Kumar Chaudhary</h5>
        <p className="font-medium text-muted">
          Hey, I'm Kumar Chaudhary, a software engineer from Nepal. Four years
          ago, I ditched other engineering fields for a coding adventure. Life
          hasn't been the same since! 💻✨ #CodingJourney #NepleaseCoder
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
