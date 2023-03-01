import { Col, Row } from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";

const CardEight = (props) => {
  return (
    <div className="cardEight ">
      <p className="cardEight__subtitle">{props.subtitle}</p>
      <h4 className="cardEight__title">{props.title}</h4>
      <p className="cardEight__description">{props.description1}</p>
      <p className="cardEight__description">{props.description2}</p>
  
    </div>
  );
};
export default CardEight;
