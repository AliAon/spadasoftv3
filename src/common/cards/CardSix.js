import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { Reveal } from "react-awesome-reveal";

const CardSix = (props) => {
  const { number, name } = props;
  const [showcount,setShowCount]=useState(false)
//   const checkviewhandler=(inView)=>{
//   //   if(inView){
//   //     setShowCount(true)
//   //   }else{
//   //     setShowCount(false)

//     }
// //}
  return (
    // <Reveal onVisibilityChange={checkviewhandler}>
      <div className="cardSix">
        <h2 className="cardSix__title">
        <CountUp end={number} />
        </h2>
        <p className="cardSix__description">{name}</p>
      </div>
    // </Reveal>
  );
};
export default CardSix;
