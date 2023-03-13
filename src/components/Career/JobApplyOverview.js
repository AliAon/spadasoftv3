import { GiMoneyStack } from "react-icons/gi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { Container, Row, Col, Card } from "react-bootstrap";
import { hostname } from "../../config";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaMoneyBill,
  FaStar,
  FaUser,
} from "react-icons/fa";
import ApplyJobForm from "./ApplyJobForm";
const JobApplyOverview = () => {
  return (
    <Container>
      <Row className="removespacing job-detail gy-4">
        <Col
          className="col-lg-4 col-md-4 col-12"
          lg={{ order: 1 }}
          xs={{ order: 2 }}
          md={{ order: 1 }}
        >
          <Card
            style={{
              padding: "15px",
              border: "unset",
              paddingBottom: "36px",
            }}
          >
            <Row className="removespacing">
              <Col></Col>
              <Col>
                <img
                  src={`${hostname}/images/career/companyLogo (2).png`}
                  className="w-100"
                />
              </Col>
              <Col></Col>
            </Row>
            <Row className="removespacing">
              <Col>
                <h2 className="job-details_company">Highspeed Studios</h2>
                <p className="job-details_company_excerpt">
                  Creative Design Agency
                </p>
                <center>
                  {" "}
                  <button className="job-details_company_follow-btn">
                    + Follow
                  </button>
                </center>

                <Row
                  className="removespacing gy-3"
                  style={{
                    paddingTop: "20px",
                  }}
                >
                  <Col lg={6} md={12} xs={6}>
                    <div className="job-location">
                      <Row className="removespacing gx-2 align-items-center">
                        <Col lg={5} md={4} xs={4}>
                          <span
                            className="job-location__famarker"
                            style={{
                              backgroundColor: "#246930",
                            }}
                          >
                            <FaUser size={20} color="#fff" />
                          </span>
                        </Col>
                        <Col lg={7} md={8} xs={8}>
                          <div>
                            <h4 className="job-title__salary_count">
                              80 - 100
                            </h4>
                            <p
                              className="job-title__compay"
                              style={{
                                color: "#AEAEAE",
                              }}
                            >
                              Employee
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col lg={6} md={12} xs={6}>
                    <div className="job-location">
                      <Row className="removespacing gx-2 align-items-center">
                        <Col lg={5} md={4} xs={4}>
                          <span
                            className="job-location__famarker "
                            style={{
                              backgroundColor: "#FFBE17",
                            }}
                          >
                            <FaStar size={20} color="#fff" />
                          </span>
                        </Col>
                        <Col lg={7} md={8} xs={8}>
                          <div>
                            <h4 className="job-title__salary_count">4.5</h4>
                            <p
                              className="job-title__compay"
                              style={{
                                color: "#AEAEAE",
                              }}
                            >
                              Reviews
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col lg={12} xs={12}>
                    <div className="job-location">
                      <Row className="removespacing gx-2">
                        <Col lg={2} md={4} xs={2}>
                          <span className="job-location__famarker">
                            <FaMapMarkerAlt size={20} color="#808080" />
                          </span>
                        </Col>
                        <Col lg={10} md={8} xs={10}>
                          <div
                            style={{
                              paddingLeft: "5px",
                            }}
                          >
                            <h4 className="job-title__salary_count">
                              London, England
                            </h4>
                            <p
                              className="job-title__compay"
                              style={{
                                color: "#AEAEAE",
                              }}
                            >
                              Location
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <div
                  style={{
                    paddingTop: "2.3rem",
                  }}
                ></div>
                <h5
                  className="job-details_company_about-comapny"
                  style={{
                    color: "#363848",
                  }}
                >
                  About Company
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
            <Row className="removespacing gy-3">
              <Col lg={6} md={12} xs={6}>
                <button
                  className="apply_btn"
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: "var(--font-body-3)",
                  }}
                >
                  23 Vacancy
                </button>
              </Col>
              <Col lg={6} md={12} xs={6}>
                <button
                  className="apply_btn"
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: "var(--font-body-3)",
                    color: "#363848",
                  }}
                >
                  More Detail
                </button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col
          md={{ order: 2 }}
          xs={{ order: 1 }}
          className="col-lg-8 col-md-8 col-12"
          lg={{ order: 2 }}
        >
          <Card
            style={{
              padding: "10px",
              border: "unset",
            }}
          >
            <Row className="removespacing">
              <Col lg={5} md={12} xs={12}>
                <h2 className="job-details_company" style={{textAlign:"left",margin:"0px",padding:"0px",fontSize:"22px"}}>Lead UI/UX Designer</h2>
                <p className="card__job-posted">Experience 2-5 years </p>
              </Col>
              <Col lg={7} md={12} xs={12}>
                <Row className="pt--10 gy-3 gx-0 removespacing">
                  <Col lg={6} md={6} xs={12}>
                    <div className="job-title">
                      <Row className="removespacing">
                        <Col lg={3} md={3} xs={2}>
                          <span className="job-location__famarker">
                            <GiMoneyStack size={25} color="#2BC155" />
                          </span>{" "}
                        </Col>
                        <Col>
                          <div>
                            <h4 className="job-title__name">
                              $14,000 - $25,000
                            </h4>
                            <p className="job-title__compay">Monthly Salary</p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col lg={6} md={6} xs={12}>
                    <div className="job-location">
                      <Row className="removespacing">
                        <Col lg={3} md={3} xs={2}>
                          <span className="job-location__famarker" style={{
                            backgroundColor:"#FBA556"
                          }}>
                            <FaMapMarkerAlt size={20} color="#fff" />
                          </span>
                        </Col>
                        <Col>
                          <div>
                            <h4 className="job-title__salary_count">
                              London, England
                            </h4>
                            <p className="job-title__compay">Location</p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card >
          <Card  style={{
              padding: "20px",
              marginTop:"1rem",
              border: "unset",
            }}>
                <Row>
                    <Col>
                    <h2 className="job-details_company" style={{textAlign:"left",margin:"0px",padding:"0px",fontSize:"20px"}}>Fill the job applications</h2>
                    <ApplyJobForm/>
                    </Col>
                </Row>

          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JobApplyOverview;
