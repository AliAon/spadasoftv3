import { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BackToTopBtn from "../common/BackToTopBtn";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderCTA from "../common/HeaderCTA";
import HeaderMobile from "../common/HeaderMobile";
import JobSearch from "../components/Career/JobSearch";
import Brand from "../components/Home/Brand";
import { GiMoneyStack } from "react-icons/gi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaMoneyBill,
  FaStar,
  FaUser,
} from "react-icons/fa";

import Cta from "../components/Home/Cta";
import JobsList from "../components/Career/JobsList";
import UpCommingEvents from "../components/Career/UpCommingEvents";
import { hostname } from "../config";
import HeaderCTATwo from "../common/HeaderCTATwo";
const JobDetail = () => {
  return (
    <Fragment>
      <Header />
      <HeaderMobile />

      <HeaderCTATwo
        title="Job Details"
        description="Rebranding awesome company"
      />
      <Container>
        <Row className="removespacing job-detail gy-4">
          <Col  className="col-lg-4 col-md-4 col-12" lg={{order:1}} xs={{order:2}} md={{order:1}}>
            <Card
              style={{
                padding: "20px",
                border:"unset",
                paddingBottom:"36px",
                boxShadow: "0px 5.83156px 18.3278px rgba(143, 134, 196, 0.07)"

              }}
            >
              <Row className="removespacing">
                <Col></Col>
                <Col>
                  <img src={`${hostname}/images/career/companyLogo (2).png`} className="w-100" />
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
                        <Row className="removespacing gx-2">
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
                    <Col lg={6}  md={12} xs={6}>
                      <div className="job-location">
                        <Row className="removespacing gx-2">
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
                      <div
                        className="job-location"
                      >
                        <Row className="removespacing">
                          <Col lg={2} md={4} xs={2}>
                            <span className="job-location__famarker">
                              <FaMapMarkerAlt size={20} color="#808080" />
                            </span>
                          </Col>
                          <Col lg={10} md={8} xs={10}>
                            <div style={{
                              paddingLeft:"5px"
                            }}>
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
                 <div style={{
                  paddingTop:"2.3rem"
                 }}>

                 </div>
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
          <Col  md={{order:2}} xs={{order:1}} className="col-lg-8 col-md-8 col-12" lg={{order:2}}>
            <Card
              style={{
                padding: "20px",
                border:"unset",
                boxShadow: "0px 5.83156px 18.3278px rgba(143, 134, 196, 0.07)"
              }}
            >
              <Row className="removespacing">
                <Col lg={7} md={7} xs={10}>
                  <h2 className="card__job-title">Lead UI/UX Designer</h2>
                  <p className="card__job-posted">
                    Posted by Admin on November 12th, 2020
                  </p>
                </Col>
                <Col lg={5} md={5} xs={2}>
                  <Row className="removespacing" style={{
                    padding:"0px",
                    margin:"0px"
                  }}>
                    <Col lg={8} md={8}>
                      <button
                        className="job-details_company_follow-btn visibilty"
                       
                      >
                        Apply Now
                      </button>
                    </Col>
                    <Col lg={4} md={4}>
                      <span className="job-location__famarker">
                        <FaHeart size={20} color="#FF5353" />
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="pt--20 gy-3 gx-0 removespacing">
                <Col lg={4} md={6} xs={12}>
                  <div className="job-title">
                    <Row className="removespacing">
                      <Col lg={3} md={3} xs={2}>
                        <span className="job-location__famarker">
                          <GiMoneyStack size={25} color="#2BC155" />
                        </span>{" "}
                      </Col>
                      <Col>
                        <div>
                          <h4 className="job-title__name">$14,000 - $25,000</h4>
                          <p className="job-title__compay">Monthly Salary</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg={4} md={6} xs={6}>
                  <div className="job-salary">
                    <Row className="removespacing">
                      <Col lg={3} md={3} xs={4}>
                        <span className="job-location__famarker">
                          <BsFillBagCheckFill size={20} color="#2BC155" />
                        </span>
                      </Col>
                      <Col>
                        <div>
                          <h4 className="job-title__salary_count">
                            2-3 Years​
                          </h4>
                          <p className="job-title__compay">Experience</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg={4} md={6} xs={6}>
                  <div className="job-location">
                    <Row className="removespacing">
                      <Col lg={3} md={3} xs={3}>
                        <span className="job-location__famarker">
                          <FaMapMarkerAlt size={20} color="#2BC155" />
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
              <Row className="removespacing pt--40">
                <Col>
                  <h5
                    className="job-details_company_about-comapny"
                    style={{
                      color: "#363848",
                    }}
                  >
                    Job Description
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                    <br />
                    <br /> Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, s
                  </p>
                </Col>
              </Row>
              <Row className="removespacing">
                <Col>
                <button
                        className="job-details_company_follow-btn desktop-hidden w-100"
                       
                      >
                        Apply Now
                      </button>
                </Col>
                </Row>
              <Row className="removespacing pt--40">
                <Col>
                  <h5
                    className="job-details_company_about-comapny"
                    style={{
                      color: "#363848",
                    }}
                  >
                    Galery
                  </h5>
                  <Row className="removespacing gy-2">
                    <Col lg={3} md={6} xs={6}>
                      <img
                        src={`${hostname}/images/career/image (21).png`}
                        className="w-100"
                      />
                    </Col>
                    <Col lg={3} md={6} xs={6}>
                      <img
                        src={`${hostname}/images/career/image (21).png`}
                        className="w-100"
                      />
                    </Col>
                    <Col lg={3} md={6} xs={6}>
                      <img
                        src={`${hostname}/images/career/image (21).png`}
                        className="w-100"
                      />
                    </Col>
                    <Col lg={3} md={6} xs={6}>
                      <img
                        src={`${hostname}/images/career/image (21).png`}
                        className="w-100"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Brand />
      </Container>
      <Container className="cta-container">
        <Cta />
      </Container>
      <Footer />
      <BackToTopBtn />
    </Fragment>
  );
};
export default JobDetail;
