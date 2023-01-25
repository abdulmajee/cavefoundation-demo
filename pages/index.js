import React from "react";
import Layout1 from "../Components/Layout/Layout1";
import SupportArea from "../Components/Elements/Home/SupportArea";
import FeaturedArea from "../Components/Elements/Home/FeaturedArea";
import NewsFeed from "../Components/Elements/Home/NewsFeed";
import AboutArea from "../Components/Elements/Home/AboutArea";
import SliderArea from "../Components/Elements/Home/SliderArea";
import CTAArea from "../Components/Elements/Home/CTAArea";

export default function Home() {
  return (
    <>
      <Layout1>
        <main>
          <SliderArea />
          <CTAArea />
          <AboutArea />
          <SupportArea />
          <FeaturedArea />
          <NewsFeed />
        </main>
      </Layout1>
    </>
  );
}
