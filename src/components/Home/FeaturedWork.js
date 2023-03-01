import { Fragment } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import CardEight from "../../common/cards/CardEight";
import SectionTitle from "../../common/SectionTitle";

const FeaturedWork = (props) => {
  return (
    <Fragment>
        <section className="pt--40 pb--60 ">
      <SectionTitle
        title="
    Featured Works
    "
        align="center"
        description="OUR PORTFOLIO"
      />
      <Row className="gx-4 mb--30">
        <Col lg={8}>
          <img src="./images/Image (7).png" className="w-100 img_height-460" />
        </Col>
        <Col lg={4}>
          <img src="./images/Image (8).png" className="w-100 img_height-460" />
        </Col>
      </Row>
      <Row className="gx-4 mb--40">
        <Col lg={4}>
          <img src="./images/Image (8).png" className="w-100 img_height-460" />
        </Col>
        <Col lg={4}>
          <img src="./images/Image (8).png" className="w-100 img_height-460" />
        </Col>
        <Col lg={4}>
          <img src="./images/Image (8).png" className="w-100 img_height-460" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <button className="btn-default">See All Portfolio</button>
        </Col>
      </Row>
      </section>

    </Fragment>
  );
};
export default FeaturedWork;
