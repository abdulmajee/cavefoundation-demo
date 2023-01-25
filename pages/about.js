import React from "react";
import AboutAboutArea from "../Components/Elements/About/AboutAboutArea";
import AboutBreadCumb from "../Components/Elements/About/AboutBreadCumb";
import AboutFaqArea from "../Components/Elements/About/AboutFaqArea";
import AboutFeatureArea from "../Components/Elements/About/AboutFeatureArea";
import AboutVideoArea from "../Components/Elements/About/AboutVideoArea";
import Layout1 from "../Components/Layout/Layout1";

export default function About() {
  return (
    <Layout1>
      <AboutBreadCumb />
      <AboutAboutArea />
      <AboutFeatureArea />
      <AboutVideoArea />
      <AboutFaqArea />
    </Layout1>
  );
}
