import { Fragment } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import CardEight from "../../common/cards/CardEight";
import CardFour from "../../common/cards/CardFour";
import SectionTitle from "../../common/SectionTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Testimonials = (props) => {
  const {title}=props
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
    <Fragment>
      <section className="testimonials-section removespacing">
        <SectionTitle
          title={title}
          align="center"
          description="TESTIMONIALS"
        />
        <Row className="pt--30 gy-4 removespacing">
          <Carousel itemClass="crouselItem" arrows={false} showDots={true} containerClass="containerCrousel" responsive={responsive}>
            <div>
              <CardFour />
            </div>
            <div>
              <CardFour />
            </div>
            <div>
              <CardFour />
            </div>
          </Carousel>
        </Row>
      </section>
    </Fragment>
  );
};
export default Testimonials;
