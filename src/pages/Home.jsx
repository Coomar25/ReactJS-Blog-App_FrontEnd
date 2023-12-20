import React from "react";
import FeaturesPost from "../components/HomePageComponents/FeaturesPost";
import TwoColumnHomePost from "../components/HomePageComponents/TwoColumnHomePost";

const Home = () => {
  return (
    <div>
      <main>
        <div class="container">
          <div class="loop-grid mb-30">
            {/* ========================================================== */}
            <FeaturesPost />
            {/* ========================================================== */}
          </div>
        </div>
        <div class="pt-50 pb-50">
          <div class="container">
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
