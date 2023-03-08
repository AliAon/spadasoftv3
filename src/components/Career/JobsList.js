import { Fragment } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";
import {MdKeyboardArrowDown} from "react-icons/md"
import JobCardList from "../../common/cards/JobCardList";
import {jobsData} from "../../data/Jobs"
const jobs=jobsData
const JobsList = (props) => {
  const jobslist=jobs.map((job,index)=>{
    return(
      <JobCardList key={index} title={job.title} company={job.company} salary={job.salary} location={job.location}/>
    )
  }) 


  return (
    <Fragment>
    <Row className="joblist_section removespacing align-items-center">
      <Col lg={6} md={6} xs={12}>
        <h2 className="joblist_section__title">Showing 34 Jobs</h2>
      </Col>
      <Col lg={6} md={6} xs={12}>
      <div className="filter_form">
        <Form className="joblist_section__job-type-form">
            <Form.Check inline name="group1" type="radio" className="joblist_section__label" label="Fulltime" />
            <Form.Check type="radio" label="Half Time" className="joblist_section__label" inline name="group1" />
        </Form>
        <span className="joblist_section_new-old">Newest <MdKeyboardArrowDown color="#1AB700"/></span>
        </div>
      </Col>
    </Row>
    <Row className="removespacing gy-4">
      
       {jobslist}
      
    </Row>
    </Fragment>
  );
};
export default JobsList;
