import { Fade } from "react-awesome-reveal";
import { Row, Col } from "react-bootstrap";
import { FaHeart, FaMap, FaMapMarked, FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";
import {GiMoneyStack} from "react-icons/gi"
import { Link } from "react-router-dom";
import { hostname } from "../../config";
const JobCard = (props) => {
  return (
      <div className="jobcard position-relative">
        <img src={`${hostname}/images/companyLogo.png`} className="jobcard__image" />
        <h4 className="jobcard__title">Database Programmer</h4>
        <div>
          <p className="jobcard__company">Maximoz Team</p>
          <span><GiMoneyStack style={{paddingRight:"10px"}} size={35} color="#A9A9A9"/></span><span className="jobcard__salary">$14,000 - $25,000 </span> <span className="jobcard__salary_monthly"> /monthly</span>
        </div>
        <div className="jobcard__location">
        <span><FaMapMarkerAlt style={{paddingRight:"10px"}} size={25} color="#A9A9A9"/></span><span className="jobcard__salary">London, England</span>
          <span className="jobcard__salary_monthly">View Maps</span>
        </div>
        <Row className="align-items-center removespacing">
          <Col lg={5} md={5} xs={5}>
          <div className="jobcard__icon">
            <FaHeart size={20} color="#fff"/>
            </div>
          </Col>
          <Col lg={7} md={7} xs={7} >
            <Link to={`${hostname}/applyjob`}>
            <button className="jobcard__apply-now">Apply Now</button>
            </Link>
          </Col>
        </Row>
        <img src={`${hostname}/images/ic_moreVertical.png`} className="jobcard__icon_dots position-absolute" />
      </div>
  );
};
export default JobCard;
