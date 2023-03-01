import { Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";

const CardEight = (props) => {
  return (
    <div className="cardEight ">
      <p className="cardEight__subtitle">{props.subtitle}</p>
      <Fade direction="up" duration={1000} triggerOnce={true}>
        <h4 className="cardEight__title">{props.title}</h4>
      </Fade>
      <Fade direction="up" delay={500} duration={1000} triggerOnce={true}>
        <p className="cardEight__description">{props.description1}</p>
        <p className="cardEight__description">{props.description2}</p>
      </Fade>
    </div>
  );
};
export default CardEight;
