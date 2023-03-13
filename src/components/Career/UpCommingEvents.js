import { Fragment } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import CardEvents from "../../common/cards/CardEvents";
import JobCardList from "../../common/cards/JobCardList";
import ListPagination from "../../common/ListPagination";
import { jobsData } from "../../data/Jobs";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const jobs = jobsData;
const UpCommingEvents = (props) => {
  const jobslist = jobs.map((job, index) => {
    return (
      <JobCardList
        key={index}
        title={job.title}
        company={job.company}
        salary={job.salary}
        location={job.location}
      />
    );
  });

  return (
    <Fragment>
      <Row className="joblist_section removespacing align-items-center">
        <Col lg={6} md={6} xs={12}>
          <h2 className="joblist_section__title">Upcoming Events</h2>
        </Col>
        <Col lg={6} md={6} xs={12}>
          <Row className="removespacing align-items-center">
            <Col lg={5} xs={1}>
            </Col>
          <Col lg={4} xs={5} className="filter-date_text-right">
            
            <span className="joblist_section_new-old">
               Filter Date <MdKeyboardArrowDown color="#1AB700" />
            </span></Col>
            <Col lg={3} xs={4}>
            <Form.Select className="joblist_section_new-old">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
             <MdKeyboardArrowDown color="#1AB700" />
            </Form.Select>
            </Col>
            </Row>
          {/* <div className="filter_form">
           
            
            
          </div> */}
        </Col>
      </Row>
      <Row className="removespacing">
        <Col lg={4} md={6}>
        <CardEvents/>
        </Col>
        <Col lg={4} md={6}>
        <CardEvents/>
        </Col>
        <Col lg={4} md={6}>
        <CardEvents/>
        </Col>
      </Row>
      <Row className="removespacing mt--40">
          <Col className="text-center">
          <Fade direction="up" duration={1500} triggerOnce={true}>
            <Link to="/portfolio">
            <button className="btn-default">View More</button></Link>
            </Fade>
          </Col>
        </Row>
    </Fragment>
  );
};
export default UpCommingEvents;
