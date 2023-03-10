import { Fragment } from "react";
import { Container } from "react-bootstrap";
import BackToTopBtn from "../common/BackToTopBtn";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderCTA from "../common/HeaderCTA";
import HeaderMobile from "../common/HeaderMobile";
import FeaturedJobs from "../components/Career/FeaturedJobs";
import FeaturedProfile from "../components/Career/FeaturedProfile";
import WhatourCustomerSays from "../components/Career/WhatourCustomerSays";
import WhyChooseUs from "../components/Career/WhyChooseUs";
import Brand from "../components/Home/Brand";
import Cta from "../components/Home/Cta";
import Testimonials from "../components/Home/Testimonials";
import CareerGrid from "../components/Portfolio/CareerGrid";

const Career = () => {
  return (
    <Fragment>
      <Header />
      <HeaderMobile />
      <HeaderCTA title="Career" description="Rebranding awesome company" />
      <Container fluid className="section__testimonial">
        <Container>
          <CareerGrid />
        </Container>
      </Container>
      <Container className="testimonials-section mb--10">
        <WhyChooseUs />
      </Container>
      <Container fluid className="section__testimonial">
      <Container>
        <FeaturedProfile/>
      </Container>
      </Container>
      <Container>
        <FeaturedJobs/>
      </Container>
      <Container>
        <Testimonials title="What our Customer Says"/>
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
export default Career;
