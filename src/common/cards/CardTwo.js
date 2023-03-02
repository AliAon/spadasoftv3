import {FaFacebook,FaTwitter} from 'react-icons/fa'
const CardTwo = (props) => {
  return (
    <div className="cardTwo">
    <img className='cardTwo__width' src={props.path} />
    <h4 className="cardTwo__title">{props.name}</h4>
    <p className="cardTwo__description">{props.position}</p>
    <center>
        <span><FaTwitter size={16}/></span>
    <span><FaFacebook  size={16}/></span>
    </center>
  </div>
  );
};
export default CardTwo;
