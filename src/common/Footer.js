import { Col, Row, Form, InputGroup, Button, Container } from "react-bootstrap";
import EmailAddress from "./Header/TopBarElements/EmailAddress";
import PhoneNo from "./Header/TopBarElements/PhoneNo";
import SocialLinks from "./Header/TopBarElements/SocialLinks";
import { BsArrowRightCircleFill } from "react-icons/bs";
import LocationAddress from "./Header/TopBarElements/LocationAddress";
import { Link } from "react-router-dom";
import FaceBookText from "./Header/TopBarElements/FaceBookText";
import TwitterText from "./Header/TopBarElements/TwitterText";
import YouTubeText from "./Header/TopBarElements/YouTubeText";
import InstagramText from "./Header/TopBarElements/InstagramText";
import { hostname } from "../config";
const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid="sm">
        <Row className="top-footer mb--40 ">
          <Col lg={3}>
            <Row className=" footer__logo">
              <Col lg={4}>
                <img src={`${hostname}/images/logo/Logo (1).png`} />
              </Col>
            </Row>
            <p className="footer__about-text">
              1772 Nevskaya Stree t NW, Suite 21389, Atlanta, GA 902344
            </p>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <h5 className="footer__menu-title mb--20">QUICK LINKS</h5>
            <ul className="footer__menu-lnks">
              <Link to="/">
                <li className="pb--15">
                  <BsArrowRightCircleFill
                    color="#544424"
                    size={12}
                    className="mr--5"
                  />{" "}
                  Company
                </li>
              </Link>
              <Link to="/about-us">
              <li className="pb--15">
                  <BsArrowRightCircleFill
                    color="#544424"
                    size={12}
                    className="mr--5"
                  />{" "}
                  Our Services
                </li>
              </Link>
              <Link to="/our-fleet">
              <li className="pb--15">
                  <BsArrowRightCircleFill
                    color="#544424"
                    size={12}
                    className="mr--5"
                  />{" "}
                  Portfolio
                </li>
              </Link>
              <Link to="/services">
              <li className="pb--15">
                  <BsArrowRightCircleFill
                    color="#544424"
                    size={12}
                    className="mr--5"
                  />{" "}
                  Contact Us
                </li>
              </Link>
            </ul>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <h5 className="footer__menu-title mb--20">CONNECT WITH US</h5>
            <FaceBookText iconwidthsmall={1} iconwidth={1} />
            <TwitterText iconwidth={1} iconwidthsmall={1}/>
            <YouTubeText iconwidth={1} iconwidthsmall={1}/>
            <InstagramText iconwidth={1} iconwidthsmall={1}/>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <h5 className="footer__menu-title mb--20">CONTACT INFO</h5>
            <LocationAddress
              iconwidth={1}
              iconwidthsmall={1}
              icon-color="#4f3313"
            />
            <div className="mb--20"></div>
            <PhoneNo
              color="#4F3313"
              iconwidth={1}
              iconwidthsmall={1}
              icon-color="#4F3313"
            />
            <div className="mb--20"></div>
            <EmailAddress
              color="#4F3313"
              iconwidth={1}
              iconwidthsmall={1}
              icon-color="#4F3313"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="footer__copyright">
              Copyright © 2023. All rights reserved.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
