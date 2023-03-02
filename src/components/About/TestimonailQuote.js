import { Row, Col } from "react-bootstrap";
const TestimonailQuote = (props) => {
  return (
    <Row className="section__about-details removespacing ">
      <Col lg={2}></Col>
      <Col>
        <img src="./images/“.png" />
        <h4 className="quotetitle">
          The people in charge, globally, are maniacs. They are maniacs, and
          unless we do something about it these people are going to deprive us
          of a future.
        </h4>
        <p className="quotename">THOM YORKE, MUSICIAN @ RADIOHEAD</p>
      </Col>
      <Col lg={2}></Col>
    </Row>
  );
};
export default TestimonailQuote;
