import { Fragment, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import JobCardList from "../../common/cards/JobCardList";
import ListPagination from "../../common/ListPagination";
import { jobsData } from "../../data/Jobs";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";
const jobs = jobsData;
const JobsList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setjobsPerPage] = useState(5);
  const lastindex = currentPage * jobsPerPage; //1*5=5
  const firstindex = lastindex - jobsPerPage; //5-5=0
  const jobstoshow = jobs.slice(firstindex, lastindex); // 1---5
  const totalpages = Math.ceil(jobs.length / jobsPerPage); //15/5=3
  const numbers = [...Array(totalpages + 1).keys()].slice(1); //[1,2,3,4,5]

  const jobslist = jobstoshow.map((job, index) => {
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
        <Col lg={6} md={5} xs={12}>
          <h2 className="joblist_section__title">Showing 34 Jobs</h2>
        </Col>
        <Col lg={6} md={7} xs={12}>
            <Row className=" align-items-center">
              <Col className="hidden-mobile" lg={3} md={1}></Col>
              <Col lg={5} xs={8} md={7}>
                <Form className="joblist_section__job-type-form">
                  <Form.Check
                    inline
                    name="group1"
                    type="radio"
                    className="joblist_section__label"
                    label="Fulltime"
                  />
                  <Form.Check
                    type="radio"
                    label="Half Time"
                    className="joblist_section__label"
                    inline
                    name="group1"
                  />
                </Form>
              </Col>
              <Col lg={4} xs={4} md={4}>
                <Form.Select className="joblist_section_new-old">
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <MdKeyboardArrowDown color="#1AB700" />
                </Form.Select>
              </Col>
            </Row>
        </Col>
      </Row>
      <Row className="removespacing gy-4">{jobslist}</Row>
      <Row className="joblist_section_paginate removespacing">
        <Col></Col>
        <Col>
          <ListPagination
            firstindex={firstindex}
            lastindex={lastindex}
            totalpages={totalpages}
            pages={numbers}
            CurrentSetPage={setCurrentPage}
            currentPage={currentPage}
          />
        </Col>
        <Col></Col>
      </Row>
    </Fragment>
  );
};
export default JobsList;
