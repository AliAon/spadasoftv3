import { Fragment } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";
import {MdKeyboardArrowDown} from "react-icons/md"
import JobCardList from "../../common/cards/JobCardList";
const JobsList = (props) => {
  return (
    <Fragment>
    <Row className="joblist_section removespacing align-items-center">
      <Col>
        <h2 className="joblist_section__title">Showing 34 Jobs</h2>
      </Col>
      <Col>
      <div style={{
            float:"right"
      }}>
        <Form className="joblist_section__job-type-form">
            <Form.Check inline name="group1" type="radio" className="joblist_section__label" label="Fulltime" />
            <Form.Check type="radio" label="Half Time" className="joblist_section__label" inline name="group1" />
        </Form>
        <span className="joblist_section_new-old">Newest <MdKeyboardArrowDown color="#1AB700"/></span>
        </div>
      </Col>
    </Row>
    <Row className="removespacing">
        <Col>
        <JobCardList/>
        </Col>
    </Row>
    </Fragment>
  );
};
export default JobsList;
