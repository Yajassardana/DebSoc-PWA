import React from "react";

import LoaderComponent from "components/LoaderComponent";
import BlogSingleHero from "sections/BlogSingleSections/BlogSingleHero";
import { Helmet } from "react-helmet";
const title = "DEBSOC NSUT | EVENTS";
const Sections = () => (
  <>
    // <Helmet>
    //   <title>{title}</title>
    // </Helmet>
    // <BlogSingleHero />
  </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />;

export default LandingPage;
