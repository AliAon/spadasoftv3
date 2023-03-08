import { Fade } from "react-awesome-reveal";
import { FaCheckCircle } from "react-icons/fa";
import { hostname } from "../../config";

const CardEvents = (props) => {
  return (
    <div className="cardevents position-relative">
      <img src={`${hostname}/images/career/image (20).png`} className="w-100" />
      <div
        style={{
          padding: "15px",
        }}
      >
        <div
          style={{
            paddingBottom: "10px",
            paddingLeft: "4rem",
          }}
        >
          <h5 className="cardevents__type">MOBILE APP</h5>
          <h3 className="cardevents__name">
            Global Android Programmer Meetup 2020{" "}
          </h3>
        </div>
        <div className="cardevents_date-box">
          <h3 className="cardevents__day">20</h3>
          <p className="cardevents__month">NOV</p>
          <FaCheckCircle size={20} color="#fff" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};
export default CardEvents;
