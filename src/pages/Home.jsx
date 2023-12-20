import React from "react";
import FeaturesPost from "../components/HomePageComponents/FeaturesPost";
import TwoColumnHomePost from "../components/HomePageComponents/TwoColumnHomePost";

const Home = () => {
  return (
    <div>
      <main>
        <div className="container">
          <div className="loop-grid mb-30">
            {/* ========================================================== */}
            <FeaturesPost />
            {/* ========================================================== */}
          </div>
        </div>
        <div className="pt-50 pb-50">
          <div className="container">
            {/* ========================================================== */}
            <TwoColumnHomePost />
            {/* ========================================================== */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
