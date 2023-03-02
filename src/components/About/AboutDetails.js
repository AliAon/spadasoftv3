import { Row, Col } from "react-bootstrap";
const AboutDetails = (props) => {
  return (
    <Row className="section__about-details removespacing">
      <Col lg={6} md={6}>
        <h2 className="cardEight__title pb--20">
          We Are Passionate About Your Online Success.
        </h2>
        <p className="cardEight__description">
          Our dedicated team of ambitious and hardworking people will become
          your trusted colleagues, who’s passion is to make your business or
          project a success! We aren’t happy with our creation until you are. We
          are true to ourselves, and commit to always perform at our best.
        </p>
      </Col>
      <Col lg={6} md={6}>
        <p className="cardEight__description pb--20">
          Our dedicated team of ambitious and hardworking people will become
          your trusted colleagues, who’s passion is to make your business or
          project a success! We aren’t happy with our creation until you are. We
          are true to ourselves, and commit to always perform at our best.
        </p>
        <strong className="strong-text">
        WE AREN’T HAPPY WITH OUR CREATION UNTIL YOU ARE. WE TAKE TREMENDOUS CARE OF YOUR NEEDS.
        </strong>
      </Col>
    </Row>
  );
};
export default AboutDetails;
