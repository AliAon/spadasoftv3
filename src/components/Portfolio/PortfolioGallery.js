import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { hostname } from "../../config";

const PortfolioGallery = () => {
  return (
    <Fragment>
      <Row className="gy-4 gx-4 removespacing testimonials-section portfolio__details">
        <Col lg={6} md={6} xs={12}>
          <figure className="fig-img">
            <img
              src={`${hostname}/images/portfolio/Rectangle 10.png`}
              className="w-100"
            />
          </figure>
          <Row className="gy-4 ">
            <Col>
              <figure className="fig-img">
                <img
                  style={{
                    borderRadius: "35px",
                  }}
                  src={`${hostname}/images/portfolio/abstract.jpg`}
                  className="w-100"
                />
              </figure>
            </Col>
            <Col>
              <figure className="fig-img">
                <img
                  src={`${hostname}/images/portfolio/Rectangle 13.png`}
                  className="w-100"
                />
              </figure>
            </Col>
          </Row>
        </Col>
        <Col lg={6} md={6} xs={12}>
          <Row className="gy-4 ">
            <Col>
              <figure className="fig-img">
                <img
                  style={{
                    borderRadius: "35px",
                  }}
                  src={`${hostname}/images/portfolio/abstract.jpg`}
                  className="w-100"
                />
              </figure>
            </Col>
            <Col>
              <figure className="fig-img">
                <img
                  src={`${hostname}/images/portfolio/Rectangle 13.png`}
                  className="w-100"
                />
              </figure>
            </Col>
          </Row>
          <figure className="fig-img">
            <img
              src={`${hostname}/images/portfolio/keyboard.png`}
              className="w-100"
            />
          </figure>
        </Col>
      </Row>
    </Fragment>
  );
};
export default PortfolioGallery;
