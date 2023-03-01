import { Row, Col, Button, Container } from "react-bootstrap";
import { FaPaperPlane, FaPlane } from "react-icons/fa";
import { HiDesktopComputer } from "react-icons/hi";
import Carousel from "react-multi-carousel";
import { Fade } from "react-awesome-reveal";

import "react-multi-carousel/lib/styles.css";
import { FiTarget } from "react-icons/fi";
import CardThree from "../../common/cards/CardThree";
import { ProcessData } from "../../data/Process";
import Test from "../../pages/Test";
const AllProcessData = ProcessData;
const Process = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Row className="mb--30 gy-3 removespacing process-section">
      <Col>
      <Fade direction="up" duration={1000} triggerOnce={true}>
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots={true}
        >
          <div className="crousel-card">
            <CardThree
              title="Strategic & Planning"
              description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
              icon={<FaPaperPlane size={30} />}
            />
          </div>
          <div className="crousel-card">
            <CardThree
              title="Design & Development"
              description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
              icon={<HiDesktopComputer size={30} />}
            />
          </div>
          <div className="crousel-card">
            <CardThree
              title="Strategic & Planning"
              description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
              icon={<FiTarget size={30} />}
            />
          </div>
        </Carousel>
        </Fade>
      </Col>
    </Row>
  );
};
export default Process;
