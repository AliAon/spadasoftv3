import { Fragment } from "react";
import { Container } from "react-bootstrap";
import BackToTopBtn from "../common/BackToTopBtn";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderMobile from "../common/HeaderMobile";
import About from "../components/Home/About";
import Brand from "../components/Home/Brand";
import Cta from "../components/Home/Cta";
import FeaturedWork from "../components/Home/FeaturedWork";
import Hero from "../components/Home/Hero";
import OurServices from "../components/Home/OurServices";
import Process from "../components/Home/Process";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeaderMobile />
      <Hero />
      <Container>
        <Process />
      </Container>
      <Container>
        <About />
      </Container>
         <Container>
          <OurServices />
        </Container>
        <Container>
            <FeaturedWork/>
        </Container>
        <Container fluid className="section__testimonial">
            <Container>
                <Testimonials title=" What People Says About Us"/>
            </Container>
        </Container>
            <Container>
            <Brand/>
        </Container>
          <Container className="cta-container">
            <Cta/>
        </Container>
      <Footer />
     <BackToTopBtn/>
    </Fragment>
  );
};
export default Home;
