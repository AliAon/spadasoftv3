import { Col, Row } from "react-bootstrap";
import {
  FaApple,
  FaAppStore,
  FaDesktop,
  FaMobile,
  FaSearch,
} from "react-icons/fa";
import CardThree from "../../common/cards/CardThree";
import SectionTitle from "../../common/SectionTitle";

const ServicesGrid = () => {
  return (
    <Row className=" removespacing testimonials-section">
      <Col>
        <SectionTitle title="Our Services" align="center" />
      </Col>
      <Row className="removespacing gy-4">
        <Col lg={4} md={6}>
          <CardThree
            boxshadow="noboxshadow"
            title="Mobile Application"
            icon={<FaMobile size={40} className='features-icons'/>}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </Col>
        <Col lg={4} md={6}>
          <CardThree
            bgnone="bg-color-change"
            boxshadow="noboxshadow"
            title="Digital Marketing"
            icon={<FaSearch size={40} className='features-icons'/>}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </Col>
        <Col lg={4} md={6}>
          <CardThree
            boxshadow="noboxshadow"
            title="UI/UX Design"
            icon={<FaDesktop size={40} className='features-icons' />}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </Col>
        <Col lg={4} md={6}>
          <CardThree
            boxshadow="noboxshadow"
            bgnone="bg-color-change"
            title="Mobile Application"
            icon={<FaMobile size={40} className='features-icons'/>}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </Col>
        <Col lg={4} md={6}>
          <CardThree
            boxshadow="noboxshadow"
            title="Digital Marketing"
            icon={<FaSearch size={40} className='features-icons'/>}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </Col>
        <Col lg={4} md={6}>
          <CardThree
            boxshadow="noboxshadow"
            bgnone="bg-color-change"
            title="UI/UX Design"
            icon={<FaDesktop size={40} className='features-icons'/>}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </Col>
      </Row>
    </Row>
  );
};
export default ServicesGrid;
