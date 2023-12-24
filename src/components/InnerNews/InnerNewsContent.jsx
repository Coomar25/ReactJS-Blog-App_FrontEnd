import { useSelector } from "react-redux";

const InnerNewsContent = () => {
  // Redux store bata data ligne aava
  const { tagsOrCategories, slug, postAllData } = useSelector((state) => state);
  const blogData = postAllData.post;
  return (
    <article class="entry-wraper mb-50">
      <div dangerouslySetInnerHTML={{ __html: blogData?.content }} />

      <div class="single-social-share clearfix wow fadeIn animated">
        <div class="entry-meta meta-1 font-small color-grey float-start mt-10">
          <span class="hit-count mr-15">
            <i class="elegant-icon icon_comment_alt mr-5"></i>182 comments
          </span>
          <span class="hit-count mr-15">
            <i class="elegant-icon icon_like mr-5"></i>
            {blogData?.likesOrReactions.length} likes
          </span>
        </div>
        <ul class="header-social-network d-inline-block list-inline float-md-end mt-md-0 mt-4">
          <li class="list-inline-item text-muted">
            <span>Share this: </span>
          </li>
          <li class="list-inline-item">
            <a class="social-icon fb text-xs-center" target="_blank" href="#">
              <i class="elegant-icon social_facebook"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="social-icon tw text-xs-center" target="_blank" href="#">
              <i class="elegant-icon social_twitter"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="social-icon pt text-xs-center" target="_blank" href="#">
              <i class="elegant-icon social_pinterest"></i>
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};
export default InnerNewsContent;
