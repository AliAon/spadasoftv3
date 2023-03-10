import { Fragment } from "react";
import {Row,Col} from "react-bootstrap"
import {FaPhoneAlt} from "react-icons/fa"
import { Link } from "react-router-dom";
const PhoneNo=(props)=>{
    return(
        <Fragment>
            <Row className="x-nowrap"> 
              <Col lg={props.iconwidth} xs={props.iconwidthsmall}>
                 <FaPhoneAlt size={14} color={props["icon-color"]}/>
                </Col>
                <Col  lg={10} xs={10}>
                    <a href="tel:+1789123456"><span className={`phone-text color-${props.color}`}>+1 789 123456</span></a>
                </Col>
            </Row>
       </Fragment>
    );
}
export default PhoneNo