import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// pages
import Pages from "pages";

// Components 
import Navbar from "components/Navbar";
import MainFooter from "components/Footers/MainFooter";
import Presentation from "sections/SocSection/SocietiesIndex";

const Routes = () => (
    <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Pages.LandingPage} />
            <Route path="/about" component={Pages.AboutPage} />
            <Route path="/editions" component={Pages.EditionPage} />
            <Route exact path="/blog" component={Pages.BlogPage} />
            <Route path="/blog/:slug" component={Pages.BlogSinglePage} />
            <Route exact path="/gallery" component={Pages.GalleryPage} />
            <Route path="/gallery/:slug" component={Pages.GallerySinglePage} />
            <Route path="/team" component={Pages.TeamPage} />
            <Route path="/contact" component={Pages.ContactPage} />
            <Route path='/societies' component={Presentation} exact />
            <Route path='/societies/:slug' component={Pages.SocietySinglePage} exact/>
            <Route path='/societies/:slug/:slug2' component={Pages.SocietySingleSingle} />
        </Switch>
        <MainFooter />
    </>
);

ReactDOM.render(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById("root"))

