import { Row, Col } from "react-bootstrap";
const AboutDetails = (props) => {
  return (
    <Row className="section__about-details removespacing">
      <Col lg={6} md={6} className="position-relative">
        <h2 className="cardEight__title pb--20">
          {props.title}
        </h2>
        <p className="cardEight__description">
        {props.description1}
        </p>
        <img src="./images/Rectangle (2).png"/>
        <img src="./images/Oval (4).png" className="position-absolute about-details__ovel"/>

      </Col>
      <Col lg={6} md={6}>
        <p className="cardEight__description pb--20">
         {props.description2}
        </p>
        <strong className="strong-text">
          {props.text}
        </strong>
      </Col>
    </Row>
  );
};
export default AboutDetails;
