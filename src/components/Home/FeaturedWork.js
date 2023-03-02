import { Fragment } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import CardEight from "../../common/cards/CardEight";
import SectionTitle from "../../common/SectionTitle";
import { Fade } from "react-awesome-reveal";

const FeaturedWork = (props) => {
  return (
    <Fragment>
      <section className="featured-section removespacing">
        <SectionTitle
          title="
    Featured Works
    "
          align="center"
          description="OUR PORTFOLIO"
        />
        <Row className="gx-4 mb--30 removespacing">
          <Col lg={8} md={8} sm={8}>
            <figure className="fig-img">
              <img
                src="./images/Image (7).png"
                className="w-100 gird_image"
              />
            </figure>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <figure className="fig-img">
              <img
                src="./images/Image (8).png "
                className="w-100 gird_image"
              />
            </figure>
          </Col>
        </Row>
        <Row className="gx-4 mb--40 removespacing">
          <Col lg={4} md={4} >
            <figure className="fig-img">
              <img
                src="./images/Image (9).png"
                className="w-100 "
              />
            </figure>
          </Col>
          <Col lg={4} md={4} >
            <figure className="fig-img">
              <img
                src="./images/Image (10).png"
                className="w-100 "
              />
            </figure>
          </Col>
          <Col lg={4} md={4} >
            <figure className="fig-img">
              <img
                src="./images/Image (11).png"
                className="w-100 "
              />
            </figure>
          </Col>
        </Row>
        <Row className="removespacing">
          <Col className="text-center">
          <Fade direction="up" duration={1500} triggerOnce={true}>
            <button className="btn-default">See All Portfolio</button>
            </Fade>
          </Col>
        </Row>
      </section>
    </Fragment>
  );
};
export default FeaturedWork;
