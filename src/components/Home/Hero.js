import { Row, Col, Button, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Hero = (props) => {
  return (
    <Container fluid className="section-hero">
      <Container>
        <img
          className="section-hero__developer-image"
          src="./images/Rectangle.png"
        /><span className="section-hero__description">Developers</span>
        
        <Row className=" gx-0 mb--30 align-items-center">
          <Col lg={9}>
            <Fade direction="up" duration={1500} triggerOnce={true}>
              <h2 className="section-hero__title">
                We Build Your Digital Appearance
              </h2>
            </Fade>
            <Fade
              direction="up"
              delay={1000}
              duration={1500}
              triggerOnce={true}
            >
              <p className="section-hero__description">
                Creating a successful digital platform solution for your
                business.
              </p>
            </Fade>
          </Col>
          <Col lg={3} md={6}></Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Hero;
