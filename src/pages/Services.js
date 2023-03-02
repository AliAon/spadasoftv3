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

const Services = () => {
  return (
    <Fragment>
      <Header />
      <HeaderMobile />
      <HeaderCTA
        title="Our Services"
        description="We are an extension of your team"
      />
      <Container>
        <AboutDetails
          title="Build comprehensive, and purpose-driven identities and experiences."
          description2={`Brand identities, digital platforms ecommerce flagships, and branded Capabilities content that bring culture and commerce together. Brand identities, digital platforms ecommerce flagships, and branded Capabilities content that bring culture and commerce together.`}
          text="VIEW STUDY CASES
          "
        />
      </Container>
      <Container fluid className="section__testimonial">
      <Container>
        <ServicesGrid/>
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
export default Services;
