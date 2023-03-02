import { Row, Col, Button, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const HeaderCTA = (props) => {
  return (
    <Container fluid className="section-cta">
      <Container>     
        <Row className=" gx-0 align-items-center">
          <Col>
            <Fade direction="up" duration={1500} triggerOnce={true}>
              <h2 className="section-cta__title">
               {props.title}
              </h2>
            </Fade>
            <Fade
              direction="up"
              delay={1000}
              duration={1500}
              triggerOnce={true}
            >
              <p className="section-cta__description">
              {props.description}
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default HeaderCTA;
