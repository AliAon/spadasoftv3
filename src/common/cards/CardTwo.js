import {FaFacebook,FaTwitter} from 'react-icons/fa'
const CardTwo = () => {
  return (
    <div
      style={{
        width: "310px",
      }}
    >
      <div className="cardTwo">
        <img className='cardTwo__width' src="./images/card/Blog Image.png" />
        <h4 className="cardTwo__title">Jonas Adam</h4>
        <p className="cardTwo__description">Co-Founder & Developer</p>
        <center>
            <span><FaTwitter size={16}/></span>
        <span><FaFacebook  size={16}/></span>
        </center>
      </div>
    </div>
  );
};
export default CardTwo;
