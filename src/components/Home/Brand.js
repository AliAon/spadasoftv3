import { Fragment } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import CardEight from "../../common/cards/CardEight";
import CardFour from "../../common/cards/CardFour";
import SectionTitle from "../../common/SectionTitle";

const Brand = (props) => {
  return (
    <Fragment>
      <section className="pt--40 pb--40 ">
        <SectionTitle
          align="center"
          title="Trusted By Big Companies"
        />
        <Row className="removespacing gy-4">
            <Col>
            <img src="./images/brand/logo-1.png"/>
            </Col>
            <Col>
            <img src="./images/brand/logo-2.png"/>
            </Col>
            <Col>
            <img src="./images/brand/logo-3.png"/>
            </Col>
            <Col>
            <img src="./images/brand/logo-8.png"/>
            </Col>
            <Col>
            <img src="./images/brand/logo-5.png"/>
            </Col>

        </Row>
        
      </section>
    </Fragment>
  );
};
export default Brand;
