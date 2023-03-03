import { Fragment } from "react";
import { Container } from "react-bootstrap";
import BackToTopBtn from "../common/BackToTopBtn";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderCTA from "../common/HeaderCTA";
import HeaderMobile from "../common/HeaderMobile";
import About from "../components/Home/About";
import Brand from "../components/Home/Brand";
import Cta from "../components/Home/Cta";
import FeaturedWork from "../components/Home/FeaturedWork";
import Hero from "../components/Home/Hero";
import OurServices from "../components/Home/OurServices";
import Process from "../components/Home/Process";
import Testimonials from "../components/Home/Testimonials";
import AboutDetails from "../components/About/AboutDetails";
import WhoWeAre from "../components/About/WhoWeAre";
import AchievementsCounter from "../components/About/AchievementsCounter";
import OurTeam from "../components/About/OurTeam";
import TestimonailQuote from "../components/About/TestimonailQuote";
const Team = () => {
  return (
    <Fragment>
      <Header />
      <HeaderMobile />
      <HeaderCTA
        title="Our Team"
        description="We are an extension of your team"
      />
    
      <Container fluid className="section__WhoWeAre">
        <Container>
          <OurTeam />
        </Container>
      </Container>
      <Container>
        <Brand />
      </Container>
      <Container className="cta-container">
        <Cta />
      </Container>
      <Footer />
      <BackToTopBtn />
    </Fragment>
  );
};
export default Team;
