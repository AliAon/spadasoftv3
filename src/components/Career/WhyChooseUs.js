import { Fragment } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import {FaRegHandPointRight,FaRocket} from "react-icons/fa"
import CardThree from "../../common/cards/CardThree";
import SectionTitle from "../../common/SectionTitle";
const WhyChooseUs = (props) => {
  return (
    <Fragment>
      <Row className="removespacing">
        <Col>
          <SectionTitle title="Why Choose Us" align="center" />
          <center>
            <p
              className="text-center cardThree__description "
              style={{
                maxWidth: "700px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </center>
        </Col>
      </Row>
      <Row className="removespacing gy-4">
        <Col lg={4} md={4} xs={12}>
          <CardThree
            boxshadow="noboxshadow"
            bgnone="bg-color-change"
            title="Trusted"
            icon={<VscWorkspaceTrusted size={40} className="features-icons" />}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </Col>
        <Col lg={4} md={4} xs={12}>
          <CardThree
            boxshadow="noboxshadow"
            bgnone="bg-color-change"
            title="Easy to Use"
            icon={<FaRegHandPointRight size={40} className="features-icons" />}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </Col>
        <Col lg={4} md={4} xs={12}>
          <CardThree
            boxshadow="noboxshadow"
            bgnone="bg-color-change"
            title="Faster"
            icon={<FaRocket size={40} className="features-icons" />}
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
          />
        </Col>
      </Row>
    </Fragment>
  );
};
export default WhyChooseUs;
