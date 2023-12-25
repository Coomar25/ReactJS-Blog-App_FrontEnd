import React from "react";
import Latest from "../LatestSection/Latest";
import EntireArticle from "../AllArticlePosts/EntireArticle";
import OwnerProfile from "./OwnerProfile";
import MostPopular from "./MostPopular";
import LastComment from "./LastComment";

const TwoColumnHomePost = () => {
  return (
    <div className="row">
      <div className="col-lg-8">
        <Latest />
        <EntireArticle />
      </div>
      <div className="col-lg-4">
        <div className="widget-area">
          <OwnerProfile />
          <MostPopular />
          <LastComment />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnHomePost;
