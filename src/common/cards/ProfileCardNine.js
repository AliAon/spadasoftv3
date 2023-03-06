import { Col, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const ProfileCardNine = (props) => {
  return (
    <div
      style={{
        width: "300px",
      }}
    >
      <div className="cardFive position-relative">
        <div>
          <Fade direction="up" duration={1000} delay={500} triggerOnce={true}>
            <Row>
              <Col lg={3} xs={3} className="position-raltive">
                <img src="http://localhost:3000/images/blogs/Ellipse 4 (1).png" />
                <img src="/images/portfolio/dot.png" style={{
                        width: "15px",
                        top: "30%",
                        left: "43px"
                    
                }} className="position-absolute"/>
              </Col>
              <Col lg={9} xs={9}>
                <h6 className="cardFive__name">David Hutapea</h6>
                <p className="cardFive__designation">UI/UX Designer</p>
                <Row>
                  <Col lg={7}>
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
                  <Col lg={5}>
                    <p
                      style={{
                        background: "#F4F9F1",
                        borderRadius: "30.8719px",
                        textAlign:"center",
                        padding:"5px",
                      }}
                    >
                      <strong>$84/hr</strong>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default ProfileCardNine;
