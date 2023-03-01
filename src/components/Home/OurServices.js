import { Row, Col, Button, Container } from "react-bootstrap";
import { FaArrowRight, FaRegCheckCircle,FaVideo } from "react-icons/fa";
import CardEight from "../../common/cards/CardEight";
import { FaCheckCircle,FaPaperPlane } from "react-icons/fa";
import {GiRoundBottomFlask} from "react-icons/gi"
import { Fade } from "react-awesome-reveal";

import CardThree from '../../common/cards/CardThree'
const OurServices = (props) => {
  return (
    <Row className="gx-4 gy-4 removespacing mb--30  section-about ">
      <Col lg={5} className="position-relative">
        <CardEight
          subtitle="OUR SERVICES"
          title="Professional Service at Affordable Price"
          description1="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
          description2="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted."
        />
        <Row>
          <Col lg={6} md={6}>
            <ul className="footer__menu-lnks">
              <li className="pb--15">
                <FaRegCheckCircle color="#544424" size={15} />
                <span className="cardEight__description pl--10">
                  Experienced Professionals
                </span>
              </li>
              <li className="pb--15">
                <FaRegCheckCircle color="#544424" size={15} />
                <span className="cardEight__description pl--10">
                  World-Class Agency
                </span>
              </li>
              <li className="pb--15">
                <FaRegCheckCircle color="#544424" size={15} />
                <span className="cardEight__description pl--10">
                  Client Focused Approach
                </span>
              </li>
            </ul>
          </Col>
          <Col lg={6} md={6}>
            <ul className="footer__menu-lnks">
              <li className="pb--15">
                <FaRegCheckCircle color="#544424" size={15} />
                <span className="cardEight__description pl--10">
                  Super Creative Team
                </span>
              </li>
              <li className="pb--15">
                <FaRegCheckCircle color="#544424" size={15} />
                <span className="cardEight__description pl--10">
                  Award Winning Agency
                </span>
              </li>
              <li className="pb--15">
                <FaRegCheckCircle color="#544424" size={15} />
                <span className="cardEight__description pl--10">
                  Money Back guarantee
                </span>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
          <Fade direction="up" duration={1500} triggerOnce={true}>
          <button className="btn-default">
               Get Free Quotes
          </button>
          </Fade>
          </Col>
        </Row>
      </Col>

      <Col lg={7}>
      <Fade direction="right" fraction={0} duration={1000} triggerOnce={true}>
        <Row className="gy-3 gx-2">
          <Col lg={{order:1}} md={{order:1}} className="col-lg-6 col-md-6 col-12"  xs={{order:1}}>
          <CardThree
            boxshadow='noboxshadow'
            title="Mobile App"
            background="gradient-back"
            colorwhite="color-white"
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
            icon={<GiRoundBottomFlask size={40} color="#fff"/>}
          />
          </Col>
          <Col lg={{order:2}} md={{order:2}} className="col-lg-6 col-md-6 col-12" xs={{order:2}}>
          <CardThree
            boxshadow='noboxshadow'
            title="Web Development"
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
            icon={<GiRoundBottomFlask size={40}/>}
          />
          </Col>
          <Col lg={{order:3}} md={{order:3}} className="col-lg-6 col-md-6 col-12" xs={{order:4}}>
          <CardThree
            title="Videography"
            boxshadow='noboxshadow'
            description="Save time and energy with our in-house professionals so you can focus on what matters on your business.​"
            icon={<FaVideo size={40}/>}
          />
          </Col>
          <Col lg={{order:4}} md={{order:4}} className="col-lg-6 col-md-6 col-12" xs={{order:3}}>
          <CardThree
           background="gradient-back"
           colorwhite="color-white"
            title="Social Campaign"
            boxshadow='noboxshadow'
            description="A small river named Duden flows by their place and supplies it with the necessary regelialia.​"
            icon={<FaPaperPlane size={40} color="#fff"/>}
          />
          </Col>
        </Row>
        </Fade>
      </Col>
      
    </Row>
  );
};
export default OurServices;
