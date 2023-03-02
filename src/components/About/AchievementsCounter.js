import { Row, Col } from "react-bootstrap";
import CardEight from "../../common/cards/CardEight";
import CardThree from "../../common/cards/CardThree";
import { GiRoundBottomFlask } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import SectionTitle from "../../common/SectionTitle";
import CardSix from "../../common/cards/CardSix";

const AchievementsCounter = (props) => {
   
  return (
    <Row className="gx-4 section__AchievementsCounter removespacing">
      <Col>
        <SectionTitle
          title="
        Spadasoft is your One-Stop-Solution for Professional Branding, Design and Development Services.           "
          align="center"
          description="Achievements"
        />
      </Col>
      <Row className="gy-4 removespacing">
        <Col xs={6} lg={3} md={6} sm={6} >
            <CardSix number="132" name="Complete Projects"/>
        </Col>
        <Col xs={6} lg={3} md={6} sm={6}>
        <CardSix number="97" name="Happy Clients"/>
        </Col>
        <Col xs={6} lg={3} md={6} sm={6}>
        <CardSix number="32" name="Awards Win"/>
        </Col>
        <Col xs={6} lg={3} md={6} sm={6}>
        <CardSix number="50" name="Awesome Team"/>
        </Col>


      </Row>
      <Row className="pt--40">
      <Col>
      <img src="./images/about/Image (14).png" className="w-100"/>
        </Col>
        <Col>
        <img src="./images/about/Image (15).png" className="w-100"/>
        </Col>
        </Row>
    </Row>
  );
};
export default AchievementsCounter;
