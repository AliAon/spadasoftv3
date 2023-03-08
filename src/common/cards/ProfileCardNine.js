import { Col, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { hostname } from "../../config";
const ProfileCardNine = (props) => {
  return (
 
      <div className="cardFive  align-items-center position-relative">
        <div>
            <Row className="removespacing align-items-center">
              <Col lg={3} xs={3} className="position-raltive">
                <img src={`${hostname}/images/blogs/Ellipse 4 (1).png`} />
                <img src="/images/portfolio/dot.png" style={{
                        width: "15px",
                        top: "30%",
                        left: "43px"
                    
                }} className="position-absolute"/>
              </Col>
              <Col lg={9} xs={9}>
                <h6 className="cardFive__name">David Hutapea</h6>
                <p className="cardFive__designation">UI/UX Designer</p>
                <Row className="align-baseline">
                  <Col lg={7} md={7} xs={8}>
                    <div>
                      <span style={{
                        paddingRight:"10px"
                      }}>
                        <FaStar color="#FF8412" />
                        <FaStar color="#FF8412" />
                        <FaStar color="#FF8412" />
                        <FaStar color="#FF8412" />
                        <FaStar color="#FF8412" />
                      </span>
                      <strong>4.3</strong>
                    </div>
                  </Col>
                  <Col lg={5} md={5} xs={4}>
                    <p
                    className="per_hour-rate"
                    >
                      <strong>$84/hr</strong>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
        </div>
      </div>
  );
};
export default ProfileCardNine;
