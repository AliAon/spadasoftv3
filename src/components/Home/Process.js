import { Row, Col, Button, Container } from "react-bootstrap";
import { FaPaperPlane, FaPlane } from "react-icons/fa";
import { HiDesktopComputer } from "react-icons/hi";
import { FiTarget } from "react-icons/fi";
import CardThree from "../../common/cards/CardThree";
import { ProcessData } from "../../data/Process";
const AllProcessData = ProcessData;
const Process = (props) => {
  return (
      <Row className="mb--30 gy-3 removespacing process-section">
        <Col lg={4} md={4} sm={12}>
          <CardThree
            title="Strategic & Planning"
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
            icon={<FaPaperPlane size={30}/>}
          />
        </Col>
        <Col lg={4} md={4} sm={12}>
          <CardThree 
           title="Design & Development"
           description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
           icon={<HiDesktopComputer size={30}/>}
          />
        </Col>
        <Col lg={4} md={4} sm={12}>
          <CardThree 
          
          title="Strategic & Planning"
          description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          icon={<FiTarget size={30}/>}
          />
        </Col>
      </Row>
  );
};
export default Process;
