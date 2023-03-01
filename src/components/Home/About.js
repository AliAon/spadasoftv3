import { Row, Col, Button, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import CardEight from "../../common/cards/CardEight";

const About = (props) => {
  return (
    <Row className="gx-3 removespacing mb--30 align-items-center section-about ">
      <Col lg={6} md={6} className="position-relative">
        <img src="./images/Image (6).png" className="section-about__img " />
        <img
          src="./images/Group 1274.png "
          className="position-absolute w-25 section-about__logo"
        />
      </Col>
      <Col lg={6} md={6}>
        <CardEight
          subtitle="OUR APPROACH"
          title="Get Solution For Your Business"
          description1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec,"
        />
        <img src="./images/music.png" />
      </Col>
    </Row>
  );
};
export default About;
