import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import CardTwo from "../../common/cards/CardTwo";
import SectionTitle from "../../common/SectionTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const DummyTeamData = [
  {
    name: "Jonas Adam",
    picture_path: "images/team/Image (16).png",
    position: "Co-Founder & Developer",
  },
  {
    name: "Jonas Adam",
    picture_path: "images/team/Image (16).png",
    position: "Co-Founder & Developer",
  },
  {
    name: "Jonas Adam",
    picture_path: "images/team/Image (16).png",
    position: "Co-Founder & Developer",
  },
  {
    name: "Jonas Adam",
    picture_path: "images/team/Image (16).png",
    position: "Co-Founder & Developer",
  },
  {
    name: "Jonas Adam",
    picture_path: "images/team/Image (16).png",
    position: "Co-Founder & Developer",
  },
  {
    name: "Jonas Adam",
    picture_path: "images/team/Image (16).png",
    position: "Co-Founder & Developer",
  },
];
const OurTeam = () => {
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
  const teamList = DummyTeamData.map((el) => {
    return (
      <div>
        <CardTwo
          name={el.name}
          path={el.picture_path}
          position={el.picture_path}
        />
      </div>
    );
  });
  return (
    <Fragment>
      <SectionTitle
        description="WHO WE ARE"
        title="Let's Meet Our Team"
        align="center"
      />
      <Carousel
        itemClass="crouselItem"
        autoPlaySpeed={2000}
        autoPlay={true}
        showDots={true}
        containerClass="containerCrousel"
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {teamList}
      </Carousel>
      ;
    </Fragment>
  );
};
export default OurTeam;
