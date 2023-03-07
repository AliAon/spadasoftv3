import { Fragment } from "react";
import JobCard from "../../common/cards/JobCard";
import { Row, Col } from "react-bootstrap";
import SectionTitle from "../../common/SectionTitle";
const WhatourCustomerSays = (props) => {
  return (
    <Fragment>
      <Row className="removespacing">
        <Col>
          <SectionTitle title="What our Customer Says" align="center" />
          <center>
            <p
              className="text-center cardThree__description "
              style={{
                maxWidth: "700px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </center>
        </Col>
      </Row>
    </Fragment>
  );
};
export default WhatourCustomerSays;
