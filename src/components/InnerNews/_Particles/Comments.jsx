const Comments = () => {
  return (
    <>
      <div className="comments-area">
        <div className="widget-header-2 position-relative mb-30">
          <h5 className="mt-5 mb-30">Comments</h5>
        </div>
        <div className="comment-list wow fadeIn animated">
          <div className="single-comment justify-content-between d-flex">
            <div className="user justify-content-between d-flex">
              <div className="thumb">
                <img src="assets/imgs/authors/author-4.jpg" alt="" />
              </div>
              <div className="desc">
                <p className="comment">
                  Vestibulum euismod, leo eget varius gravida, eros enim
                  interdum urna, non rutrum enim ante quis metus. Duis porta
                  ornare nulla ut bibendum
                </p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <h5>
                      <a href="#">Rosie</a>
                    </h5>
                    <p className="date">6 minutes ago</p>
                  </div>
                  <div className="reply-btn">
                    <a href="#" className="btn-reply">
                      Reply
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comment-list wow fadeIn animated">
          <div className="single-comment justify-content-between d-flex">
            <div className="user justify-content-between d-flex">
              <div className="thumb">
                <img src="assets/imgs/authors/author-2.jpg" alt="" />
              </div>
              <div className="desc">
                <p className="comment">
                  Sed ac lorem felis. Ut in odio lorem. Quisque magna dui,
                  maximus ut commodo sed, vestibulum ac nibh. Aenean a tortor in
                  sem tempus auctor
                </p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <h5>
                      <a href="#">Agatha Christie</a>
                    </h5>
                    <p className="date">December 4, 2023 at 3:12 pm</p>
                  </div>
                  <div className="reply-btn">
                    <a href="#" className="btn-reply">
                      Reply
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-comment depth-2 justify-content-between d-flex mt-50">
            <div className="user justify-content-between d-flex">
              <div className="thumb">
                <img src="assets/imgs/authors/author.jpg" alt="" />
              </div>
              <div className="desc">
                <p className="comment">
                  Sed ac lorem felis. Ut in odio lorem. Quisque magna dui,
                  maximus ut commodo sed, vestibulum ac nibh. Aenean a tortor in
                  sem tempus auctor
                </p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <h5>
                      <a href="#">Steven</a>
                    </h5>
                    <p className="date">December 4, 2023 at 3:12 pm</p>
                  </div>
                  <div className="reply-btn">
                    <a href="#" className="btn-reply">
                      Reply
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comment-list wow fadeIn animated">
          <div className="single-comment justify-content-between d-flex">
            <div className="user justify-content-between d-flex">
              <div className="thumb">
                <img src="assets/imgs/authors/author-3.jpg" alt="" />
              </div>
              <div className="desc">
                <p className="comment">
                  Donec in ullamcorper quam. Aenean vel nibh eu magna gravida
                  fermentum. Praesent eget nisi pulvinar, sollicitudin eros
                  vitae, tristique odio.
                </p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <h5>
                      <a href="#">Danielle Steel</a>
                    </h5>
                    <p className="date">December 4, 2023 at 3:12 pm</p>
                  </div>
                  <div className="reply-btn">
                    <a href="#" className="btn-reply">
                      Reply
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Comments;
