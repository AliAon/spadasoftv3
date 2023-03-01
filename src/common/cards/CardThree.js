import { FaFacebook, FaTwitter,FaPaperPlane } from "react-icons/fa";
const CardThree = (props) => {
  const {title,description,icon,background,colorwhite,boxshadow}=props

  return (
      <div className={`cardThree ${background} ${boxshadow}`} >
        {icon}
        <h4 className={`cardThree__title ${colorwhite}`}>{title}</h4>
        <p className={`cardThree__description ${colorwhite}`}>
         {description}
        </p>
      </div>
  );
};
export default CardThree;
