import { FaFacebook, FaTwitter,FaPaperPlane } from "react-icons/fa";
const CardThree = () => {
  return (
    <div
      style={{
        width: "310px",
      }}
    >
      <div className="cardThree">
        <FaPaperPlane size={35} />
        <h4 className="cardThree__title">Strategic & Planning</h4>
        <p className="cardThree__description">
          Save time and energy with our in-house professionals so you can focus
          on what matters on your business.​
        </p>
      </div>
    </div>
  );
};
export default CardThree;
