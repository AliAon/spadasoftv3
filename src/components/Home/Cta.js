import { Fragment } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import CardEight from "../../common/cards/CardEight";
import CardFour from "../../common/cards/CardFour";
import SectionTitle from "../../common/SectionTitle";
import { Fade } from "react-awesome-reveal";

const Cta = (props) => {
  return (
    <Row className="cta-section mt--30 mb--60 removespacing">
      <Col lg={3}></Col>
      <Col className="text-center">
      <Fade direction="up" duration={1000} triggerOnce={true}>
        <h3 className="section__title text-center color-white">Get Your Brand Visible!</h3>
        </Fade>
        <Fade direction="up" delay={500} duration={1000} triggerOnce={true}>
        <p className="section__description text-center mb--20 color-white">
          Create a successful digital platform and scale up your business. Start
          your business today and focus on what matters.
        </p>
        </Fade>
        <Fade direction="up"  delay={500} duration={1000} triggerOnce={true}>
        <button className="btn-default-white">Get Free Quotes</button>
        </Fade>
      </Col>
      <Col lg={3}></Col>
    </Row>
  );
};
export default Cta;
