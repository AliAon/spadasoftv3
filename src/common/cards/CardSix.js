import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const CardSix = (props) => {
  const { number, name } = props;
  const [showcount,setShowCount]=useState(false)
  const customAnimation = keyframes`
  from {
   
  }

  to {
  
  }
`;
  const checkviewhandler=(inView)=>{
    if(inView){
      setShowCount(true)
    }
}
  return (
    <Reveal keyframes={customAnimation} onVisibilityChange={checkviewhandler}>
      <div className="cardSix">
        <h2 className="cardSix__title">
        {showcount && <CountUp end={number} />}
        </h2>
        <p className="cardSix__description">{name}</p>
      </div>
     </Reveal>
  );
};
export default CardSix;
