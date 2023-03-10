import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import ProfileCardNine from "../../common/cards/ProfileCardNine";
import Carousel from "react-multi-carousel";

const FeaturedProfile = (props) => {
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
      <Row className="section__testimonial  removespacing featuredprofile__section">
        <Row className="removespacing featuredprofile__section__title-viewmore">
          <Col lg={9} md={9}>
            <h3 className="featured_profile__title">
              Featured Profile This Week
            </h3>
          </Col>
          <Col lg={3} md={3}>
            <p
              style={{
                fontFamily: "Montserrat-Bold",
                color: "#1ab700",
                fontSize: "var(--font-body-2)",
                textAlign: "center",
              }}
            >
              View more
            </p>
          </Col>
        </Row>

        <Carousel
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="crouselCardItem"
          showDots={true}
          containerClass="containerCrousel"
          responsive={responsive}
        >
          <div>
            <ProfileCardNine />
          </div>
          <div>
            <ProfileCardNine />
          </div>
          <div>
            <ProfileCardNine />
          </div>
          <div>
            <ProfileCardNine />
          </div>
        </Carousel>
      </Row>
    </Fragment>
  );
};
export default FeaturedProfile;
