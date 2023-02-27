import { FaFacebook, FaTwitter, FaPaperPlane } from "react-icons/fa";
const CardFour = () => {
  return (
    <div
      style={{
        width: "310px",
      }}
    >
      <div className="cardFour">
        <img className="cardFour__image" src="./images/card/Image-5.png"/>
        <p className="cardFour__description">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tempus consectetur mi nec hendrerit. Integer id est massa.”
        </p>
        <h4 className="cardFour__testimonial__name">Bruce Riley</h4>

        <p className="cardFour__weblink">www.clientwebsite.com</p>
      </div>
    </div>
  );
};
export default CardFour;
