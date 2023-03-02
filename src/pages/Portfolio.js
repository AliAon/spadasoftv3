import { Fragment } from "react";
import { Container } from "react-bootstrap";
import BackToTopBtn from "../common/BackToTopBtn";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderCTA from "../common/HeaderCTA";
import HeaderMobile from "../common/HeaderMobile";
import Brand from "../components/Home/Brand";
import Cta from "../components/Home/Cta";

import AboutDetails from "../components/About/AboutDetails";
import ServicesGrid from "../components/Services/ServicesGrid";

const Portfolio = () => {
  return (
    <Fragment>
      <Header />
      <HeaderMobile />
      <HeaderCTA
        title="Portfolio"
        description="Our works speak louder than words"
      />
      <Container className="cta-container">
        <Cta />
      </Container>
      <Footer />
      <BackToTopBtn />
    </Fragment>
  );
};
export default Portfolio;
