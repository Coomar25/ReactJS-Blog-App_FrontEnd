import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderAuthorComponent from "./HeaderAuthorComponent";
import InnerNewsContent from "./InnerNewsContent";
import { setInnerData } from "../../redux/ackAction/action";
import { useDispatch } from "react-redux";
import AuthorBox from "./_Particles/AuthorBox";

const InnerNews = () => {
  const dispatch = useDispatch();
  const [fetchinnerpost, setFetchinnerpost] = useState([]);
  const { tagsOrCategories, slug } = useParams();

  useEffect(() => {
    const innerblogData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/post/${tagsOrCategories}/${slug}`
        );
        let postAllData = response.data;
        setFetchinnerpost(postAllData.post);
        dispatch(setInnerData(tagsOrCategories, slug, postAllData));
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching the inner post data");
      }
    };

    innerblogData();
  }, []);

  return (
    <main className="bg-grey pb-30">
      <div className="container single-content">
        <div className="entry-header entry-header-style-1 mb-50 pt-50">
          <h1 className="entry-title mb-50 font-weight-900">
            {fetchinnerpost.title}
          </h1>
          <HeaderAuthorComponent />
        </div>

        <figure className="image mb-30 m-auto text-center border-radius-10">
          <img
            className="border-radius-10"
            src={fetchinnerpost?.imagesOrMedia}
            alt="post-title"
          />
        </figure>

        <article className="entry-wraper mb-50">
          {/* article/blog post here */}
          <InnerNewsContent />

          {/* <!--author box--> */}
          {/* <AuthorBox /> */}
          {/* <!--related posts--> */}

          {/* <!--Comments--> */}

          {/* <!--comment form--> */}
        </article>
      </div>
    </main>
  );
};
export default InnerNews;
