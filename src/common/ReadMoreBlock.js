import { Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const ReadMoreBlock = (props) => {
  return (
    <div className="cardEight ">
      <Fade direction="up" duration={1000} triggerOnce={true}>
        <h4 className="cardEight__title">{props.title}</h4>
      </Fade>
      <Fade direction="up" delay={500} duration={1000} triggerOnce={true}>
        <p className="cardEight__description">{props.description1}</p>
      </Fade>
      <Fade direction="up" delay={500} duration={1000} triggerOnce={true}>
        <p className="cardEight__subtitle">{props.subtitle}</p>
      </Fade>
      <button className="btn-default">
        <span className="pr--10">View Work</span>
         <FaArrowRight/>
      </button>
    </div>
  );
};
export default ReadMoreBlock;
