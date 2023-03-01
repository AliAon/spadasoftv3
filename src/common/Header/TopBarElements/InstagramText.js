import { Fragment } from "react";
import {Row,Col} from "react-bootstrap"
import {FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube} from "react-icons/fa"
import { Link } from "react-router-dom";
const InstagramText=(props)=>{
    return(
        <Fragment>
            <Row className="x-nowrap pb--15"> 
              <Col lg={props.iconwidth} xs={props.iconwidthsmall}>
                 <FaInstagram size={14} color={props["icon-color"]}/>
                </Col>
                <Col  lg={10} xs={10}>
                    <a href="#"><span className={`phone-text color-${props.color}`}>Instagram</span></a>
                </Col>
            </Row>
       </Fragment>
    );
}
export default InstagramText