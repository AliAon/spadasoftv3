import { Fragment } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import CardEight from "../../common/cards/CardEight";
import CardFour from "../../common/cards/CardFour";
import SectionTitle from "../../common/SectionTitle";

const Cta = (props) => {
  return (
    <Row className="cta-section mt--30 mb--60">
      <Col lg={3}></Col>
      <Col className="text-center">
        <h3 className="section__title text-center color-white">Get Your Brand Visible!</h3>
        <p className="section__description text-center mb--20">
          Create a successful digital platform and scale up your business. Start
          your business today and focus on what matters.
        </p>
        <button className="btn-default-white">Get Free Quotes</button>
      </Col>
      <Col lg={3}></Col>
    </Row>
  );
};
export default Cta;
