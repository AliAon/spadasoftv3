import { Fragment } from "react";
import JobCard from "../../common/cards/JobCard";
import { Row, Col } from "react-bootstrap";
import SectionTitle from "../../common/SectionTitle";
import {Link} from "react-router-dom";
const FeaturedJobs = (props) => {
  return (
    <Fragment>
      <Row className="removespacing ">
        <Col>
          <SectionTitle title="Featured Jobs" align="center" />
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
      <Row className="gx-3 gy-4 featured-jobs_cards removespacing">
        <Col lg={3} md={6}>
          <JobCard />
        </Col>
        <Col lg={3} md={6}>
          <JobCard />
        </Col>
        <Col lg={3} md={6}>
          <JobCard />
        </Col>
        <Col lg={3} md={6}>
          <JobCard />
        </Col>
      </Row>
      <Row className=" featured-jobs_cards__btn removespacing ">
        <Col >
       <Link to="http://localhost:3000/career/jobs"> <button className="btn-default">View More</button></Link>
        </Col>
      </Row>
    </Fragment>
  );
};
export default FeaturedJobs;
