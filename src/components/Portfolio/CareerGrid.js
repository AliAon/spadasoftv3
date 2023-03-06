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

const CareerGrid = () => {
  return (
    <Row className=" removespacing testimonials-section">
      <Col>
        <SectionTitle title="Perks & Benefits" align="center" />
        <center>
        <p className="text-center cardThree__description " style={{
            maxWidth:"700px"
        }}>
          Valet Parking is the first impression & the final touch of any event.
          Call us today for a FREE estimate for your private event or party.
          We’d love to discuss all the details with you and answer any questions
          you may have. We can provide you with the best valet service at
          competitive prices.
        </p>
        </center>
      </Col>
      <Row className="removespacing gy-4">
        <Col lg={4} md={6}>
          <CardThree
            boxshadow="noboxshadow"
            title="Mobile Application"
            icon={<FaMobile size={40} className="features-icons" />}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </Col>
        <Col lg={4} md={6}>
          <CardThree
            bgnone="bg-color-change"
            boxshadow="noboxshadow"
            title="Digital Marketing"
            icon={<FaSearch size={40} className="features-icons" />}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </Col>
        <Col lg={4} md={6}>
          <CardThree
            boxshadow="noboxshadow"
            title="UI/UX Design"
            icon={<FaDesktop size={40} className="features-icons" />}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </Col>
        <Col lg={4} md={6}>
          <CardThree
            boxshadow="noboxshadow"
            bgnone="bg-color-change"
            title="Mobile Application"
            icon={<FaMobile size={40} className="features-icons" />}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </Col>
        <Col lg={4} md={6}>
          <CardThree
            boxshadow="noboxshadow"
            title="Digital Marketing"
            icon={<FaSearch size={40} className="features-icons" />}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </Col>
        <Col lg={4} md={6}>
          <CardThree
            boxshadow="noboxshadow"
            bgnone="bg-color-change"
            title="UI/UX Design"
            icon={<FaDesktop size={40} className="features-icons" />}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </Col>
      </Row>
    </Row>
  );
};
export default CareerGrid;
