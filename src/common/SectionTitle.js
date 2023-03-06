import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const SectionTitle = (props) => {
  return (
    <Fragment>
      <Row className="justify-content-center pt--20 pb--20 removespacing">
        <Col lg={props.width}>
          <p className={`section__description text-${props.align}`}>
            {props.description}
          </p>
          <Fade direction="up" duration={1000} triggerOnce={true}>
          <h3 className={`section__title text-${props.align}`}>
            {props.title}
          </h3>
          </Fade>
          <center><img src="http://localhost:3000/images/Rectangle (1).png"/></center>
        </Col>
      </Row>
    </Fragment>
  );
};
export default SectionTitle;
