import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import {FaStar} from "react-icons/fa"
const PortfolioReview = () => {
  return (
    <Fragment>
      <Row className="portfolioreview__section align-items-center">
        <Col lg={{order:1}} md={6} className="col-lg-6 col-md-6 col-xs-12"  xs={{order:2}} >
          <h4 className="portfolioreview__section__custom_view">Customers view</h4>
          <h2 className="portfolioreview__section__custom_title">So great!<br/> Very thorough<br/> and on time!</h2>
          <p className="cardEight__description ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
          <FaStar color="#1AB70094" />
          <FaStar color="#1AB70094" />
          <FaStar color="#1AB70094" />
          <FaStar color="#1AB70094" />
          <FaStar color="#1AB70094" />
          <img src="http://localhost:3000/images/portfolio/Line 7.png" />
          <span>
            {" "}
            <strong style={{ color: "#000000" }}>Amazon</strong>
          </span>
        </Col>
        <Col lg={{order:2}} md={6} className="col-lg-6 col-md-6 col-xs-12" xs={{order:1}}>
        <img src="http://localhost:3000/images/portfolio/Group 1526.png" className="w-100"/>
        </Col>
      </Row>
    </Fragment>
  );
};
export default PortfolioReview;
