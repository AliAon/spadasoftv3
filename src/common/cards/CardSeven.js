import { Col, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaPaperPlane } from "react-icons/fa";
import MapAddress from "../MapAddress";
import OfficeTime from "../OfficeTime";
import PhoneNo from "../PhoneNo";
const CardSeven = () => {
  return (
    <div
      style={{
        width: "500px",
      }}
    >
      <div className="cardSeven">
        <h2 className="cardSeven__title">Android Developer</h2>
        <Row>
          <Col lg={4}>
            <MapAddress iconwidth={2}/>
          </Col>
          <Col lg={4}>
            <OfficeTime iconwidth={2}/>
          </Col>
        </Row>
        <Row className="pt--20 justify-content-center">
          <Col lg={10}>
          <button className="cardSeven__apply-now">Apply Now</button>

          </Col>
        </Row>
      </div>
    </div>
  );
};
export default CardSeven;
