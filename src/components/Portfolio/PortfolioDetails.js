import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
const PortfolioDetails = () => {
  return (
    <Fragment>
      <Row className="removespacing testimonials-section portfolio__details">
        <Col lg={6} md={6} xs={12}>
          <h3 className="cardEight__title ">Project Info</h3>
          <p className="cardEight__description ">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth. Even the
            all-powerful Pointing has no control.
          </p>
          <p className="cardEight__description ">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day.
          </p>
        </Col>
        <Col lg={6} md={6} xs={12}>
          <Row>
            <Col>
              <h4 className="portfolio__details__title">CLIENT</h4>
              <p className="cardEight__description ">Jimmy McGill</p>
              <br />
              <h4 className="portfolio__details__title">INDUSTRY</h4>
              <p className="cardEight__description ">Printing Company</p>
              <br />
              <h4 className="portfolio__details__title">YEAR</h4>
              <p className="cardEight__description ">2020</p>
            </Col>
            <Col>
              <h4 className="portfolio__details__title">SERVICE</h4>
              <p className="cardEight__description ">
                Branding Identity,
                <br /> Website & Mobile,
                <br /> Interactive Design, <br />
                Social Media Campaign
              </p>
            </Col>
          </Row>
        </Col>
        <Row>
        <Col lg={6} md={6} xs={12}>
            {" "}
            <h3 className="cardEight__title ">Challenge</h3>
            <p className="cardEight__description ">
              IECL is recognized as the leading provider of coach training &
              leadership development. Their vision is to develop the next
              generation of exceptional leaders. Their Accreditation program
              consists of three consecutive levels of Organizational Coach
              Training. It is accredited by the International Coach Federation
              as an Accredited Coach Training Program (ACTP). Download the
              prospectus to find out more.
            </p>
          </Col>
          <Col lg={6} md={6} xs={12}>
          <h3 className="cardEight__title ">What We've Done</h3>
            <p className="cardEight__description ">
              IECL is recognized as the leading provider of coach training &
              leadership development. Their vision is to develop the next
              generation of exceptional leaders. Their Accreditation program
              consists of three consecutive levels of Organizational Coach
              Training. It is accredited by the International Coach Federation
              as an Accredited Coach Training Program (ACTP). Download the
              prospectus to find out more.
            </p>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
};
export default PortfolioDetails;
