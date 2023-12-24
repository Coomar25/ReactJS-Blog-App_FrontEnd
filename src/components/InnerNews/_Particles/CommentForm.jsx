const CommentForm = () => {
  return (
    <>
      <div className="comment-form wow fadeIn animated">
        <div className="widget-header-2 position-relative mb-30">
          <h5 className="mt-5 mb-30">Leave a Reply</h5>
        </div>
        <form className="form-contact comment_form" action="#" id="commentForm">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <textarea
                  className="form-control w-100"
                  name="comment"
                  id="comment"
                  cols="30"
                  rows="9"
                  placeholder="Write Comment"
                ></textarea>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  className="form-control"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <input
                  className="form-control"
                  name="website"
                  id="website"
                  type="text"
                  placeholder="Website"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn button button-contactForm">
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default CommentForm;
