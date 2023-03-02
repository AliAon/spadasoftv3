import { Row, Col } from "react-bootstrap";
import CardEight from "../../common/cards/CardEight";
import CardThree from "../../common/cards/CardThree";
import { GiRoundBottomFlask } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
const WhoWeAre = (props) => {
  return (
    <Row  className="gx-4 removespacing">
      <Col lg={6} className="position-relative">
        <img
          src="./images/about/Image (13).png"
          className="section-about__img "
        />
          <img
          src="./images/about/Oval (5).png"
          className="position-absolute big-green-circle"
        />
         <img
          src="./images/about/Oval (6).png"
          className="position-absolute small-green-circle"

        />
      </Col>
      <Col lg={6} >
        <CardEight
          boxshadow="noboxshadow"
          subtitle="WHO WE ARE"
          title="We Design Your Success"
          description1="With more than 10-years experience, our team plan and create strategy every single detail to make sure to bring you the best and effective solution for your business. We are passionate about your online success."
        />
        <Row className="gy-2 gx-5 pt--20">
          <Col lg={6} md={6} sm={6} >
            <div className={`cardThree p--0 noboxshadow bg-color-change`}>
              <RiTeamLine size={30}  />
              <h4 className={`cardThree__title`}>Super Creative</h4>
              <p className={`cardThree__description`}>
              Flexible drag & drop editor, you can reach infinite design possibilities.
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <div className={`cardThree p--0 noboxshadow bg-color-change`}>
              <FaGlobe size={30} />
              <h4 className={`cardThree__title`}>World Class Team</h4>
              <p className={`cardThree__description`}>
              Flexible drag & drop editor, you can reach infinite design possibilities.
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <div className={`cardThree p--0 noboxshadow bg-color-change`}>
              <RiTeamLine size={30} />
              <h4 className={`cardThree__title`}>Super Creative</h4>
              <p className={`cardThree__description`}>
              Flexible drag & drop editor, you can reach infinite design possibilities.
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <div className={`cardThree p--0 noboxshadow bg-color-change`}>
              <FaGlobe size={30} />
              <h4 className={`cardThree__title`}>World Class Team</h4>
              <p className={`cardThree__description`}>
              Flexible drag & drop editor, you can reach infinite design possibilities.
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default WhoWeAre;
