import { Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import BackToTopBtn from "../common/BackToTopBtn";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderCTA from "../common/HeaderCTA";
import HeaderMobile from "../common/HeaderMobile";
import Brand from "../components/Home/Brand";
import Cta from "../components/Home/Cta";
import ContactForm from "../common/ContactForm";
const ContactUs = () => {
  return (
    <Fragment>
      <Header />
      <HeaderMobile />
      <HeaderCTA
        title="Contact Us"
        description="Ready to take the next step and work together? Let’s work together

        "
      />
      <Container>
        <Row className="removespacing SelectedWork-section gx-5 gy-4 contact-section">
          <Col lg={7} md={7}>
            <h3 className="section__title ">Let's get in touch.</h3>
            <p className="section__description">
              Ready to take the next step and work together?
            </p>
            <ContactForm />
          </Col>
          <Col lg={5} md={5}>
            <div
              style={{
                width: "270px",
                marginBottom: "3.5rem",
              }}
            >
              <h4 className="contact-section_contact-info-title">
                HEADQUARTERS
              </h4>
              <p className="section__description">
                312 New Soul Street NW, Suite 21389 San Fransisco, CA 902344
              </p>
            </div>
            <div
              style={{
                width: "270px",
                marginBottom: "3.5rem",
              }}
            >
              <h4 className="contact-section_contact-info-title">
                RESPOND TIME
              </h4>
              <p className="section__description">
                Generally respond within 4-5 business days. Monday – Friday AEST{" "}
              </p>
            </div>
            <div
              style={{
                width: "270px",
                marginBottom: "3.5rem",
              }}
            >
              <h4 className="contact-section_contact-info-title">SUPPORT</h4>
              <p className="section__description">
                contact@domain.com <br/> +1 789 123456
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="cta-container">
        <Cta />
      </Container>
      <Footer />
      <BackToTopBtn />
    </Fragment>
  );
};
export default ContactUs;
