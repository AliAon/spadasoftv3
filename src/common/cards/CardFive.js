import { Col, Row } from "react-bootstrap";

const CardFive = () => {
  return (
    <div
      style={{
        width: "310px",
      }}
    >
      <div className="cardFive ">
        <img src="./images/card/Blog Image.png" />
        <p className="cardFive__date">08.08.2021</p>
        <h4 className="cardFive__title">
          Dream destinations to visit this year in Paris
        </h4>
        <p className="cardFive__description">
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </p>
        <div>
          <Row>
            <Col lg={3}>
              <img src="./images/card/Ellipse4.png" />
            </Col>
            <Col lg={9}>
              <h6 className="cardFive__name">By Jennifer Lawrence</h6>
              <p className="cardFive__designation">Thinker & Designer</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default CardFive;
