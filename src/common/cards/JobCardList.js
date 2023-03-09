import { Row,Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaMoneyBill } from "react-icons/fa";
import {GiMoneyStack} from "react-icons/gi"
import { Link } from "react-router-dom";
import { hostname } from "../../config";

const JobCardList = (props) => {
  const {title,company,salary,location}=props
  return (
    <Col lg={12}>
    <Row className="jobcardlist gy-3 removespacing">
      <Col lg={3} md={4} >
        <div className="job-title">
          <Row className="removespacing">
            <Col lg={3} md={3} xs={3}>
              <img src={`${hostname}/images/career/companyLogo (1).png`} className="w-100" />
            </Col>
            <Col>
              <div>
                <h4 className="job-title__name">{title}</h4>
                <p className="job-title__compay">{company}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg={3} md={4} xs={6}>
        <div className="job-salary">
          <Row className="removespacing">
            <Col lg={3} md={3} xs={3}>
            <span className="job-location__famarker"><GiMoneyStack size={25} color="#2BC155"/></span>
            </Col>
            <Col>
              <div>
                <h4 className="job-title__salary_count">{salary}</h4>
                <p className="job-title__compay">Monthly Salary</p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg={3} md={4} xs={6}>
      <div className="job-location">
          <Row className="removespacing">
            <Col lg={3} md={3} xs={3}>
            <span className="job-location__famarker"><FaMapMarkerAlt size={25} color="#2BC155"/></span>
            </Col>
            <Col>
              <div>
                <h4 className="job-title__salary_count">{location}</h4>
                <p className="job-title__compay">Location</p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg={3} md={12}>
        <div className="text-right">
          <Link to={`${hostname}/career/jobs/1`}>
            <button className="apply_btn">
                Read More
            </button>
            </Link>
        </div>
      </Col>
    </Row>
    </Col>
  );
};
export default JobCardList;
