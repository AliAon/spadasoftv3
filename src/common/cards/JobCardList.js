import { Row,Col } from "react-bootstrap";

const JobCardList = (props) => {
  return (
    <Row className="jobcardlist gy-3 removespacing">
      <Col lg={3} md={4}>
        <div className="job-title">
          <Row className="removespacing">
            <Col lg={3} md={3}>
              <img src="http://localhost:3000/images/career/companyLogo (1).png" className="w-100" />
            </Col>
            <Col>
              <div>
                <h4 className="job-title__name">Senior UX Designer</h4>
                <p className="job-title__compay">Highspeed Studios</p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg={3} md={4}>
        <div className="job-salary">
          <Row className="removespacing">
            <Col lg={3} md={3}>
              <img src="http://localhost:3000/images/career/companyLogo (1).png" className="w-100"/>
            </Col>
            <Col>
              <div>
                <h4 className="job-title__name">$14,000 - $25,000</h4>
                <p className="job-title__compay">Monthly Salary</p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg={3} md={4}>
      <div className="job-location">
          <Row className="removespacing">
            <Col lg={3} md={3}>
              <img src="http://localhost:3000/images/career/companyLogo (1).png" className="w-100"/>
            </Col>
            <Col>
              <div>
                <h4 className="job-title__name">London, England</h4>
                <p className="job-title__compay">Location</p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg={3} md={12}>
        <div className="text-right">
            <button className="apply_btn">
                Apply Now
            </button>
        </div>
      </Col>
    </Row>
  );
};
export default JobCardList;
