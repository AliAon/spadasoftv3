import { Fragment } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import CardEight from "../../common/cards/CardEight";
import CardFour from "../../common/cards/CardFour";
import SectionTitle from "../../common/SectionTitle";

const Testimonials = (props) => {
  return (
    <Fragment>
      <section className="pt--40 pb--60 ">
        <SectionTitle
          title="
        What People Says About Us
             "
          align="center"
          description="TESTIMONIALS"
        />
        <Row className="pt--50">
          <Col lg={4}>
            <CardFour />
          </Col>
          <Col lg={4}>
            <CardFour />
          </Col>
          <Col lg={4}>
            <CardFour />
          </Col>
        </Row>
      </section>
    </Fragment>
  );
};
export default Testimonials;
