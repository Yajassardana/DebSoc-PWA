import React from "react";

import Header from "components/PageHeaders/BlogHeader";
import LoaderComponent from "components/LoaderComponent";
import BlogHero from "sections/BlogSections/BlogHero";
import { Helmet } from "react-helmet";
const title = "DEBSOC NSUT | EVENTS";
const Sections = () => (
  <>
    <Helmet>
      {/* <title>{title}</title> */}
      <title>EVENTS</title>
    </Helmet>
    <Header />
    <div style={{ margin: "3rem" }}></div>
    <BlogHero />
  </>
);

const LandingPage = () => {
  document.documentElement.classList.remove("nav-open");
  return <LoaderComponent component={<Sections />} />;
};

export default LandingPage;
