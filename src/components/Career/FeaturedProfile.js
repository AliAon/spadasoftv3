import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import ProfileCardNine from "../../common/cards/ProfileCardNine";

const FeaturedProfile = (props) => {
  return (
    <Fragment>
      <Row className="section__testimonial " style={{
        padding:"30px"
      }}>
        <Row>
          <Col lg={9}>
            <h3>Featured profile this week</h3>
          </Col>
          <Col lg={3}>
            <p>View more</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProfileCardNine />
          </Col>
          <Col>
            <ProfileCardNine />
          </Col>
          <Col>
            <ProfileCardNine />
          </Col>
        
        </Row>
      </Row>
    </Fragment>
  );
};
export default FeaturedProfile;
