import { Fragment } from "react";
import {Row,Col} from "react-bootstrap"
import {FaFacebook, FaPhoneAlt, FaTwitter} from "react-icons/fa"
import { Link } from "react-router-dom";
const TwitterText=(props)=>{
    return(
        <Fragment>
            <Row className="x-nowrap pb--15"> 
              <Col lg={props.iconwidth} xs={props.iconwidthsmall}>
                 <FaTwitter size={14} color={props["icon-color"]}/>
                </Col>
                <Col  lg={10} xs={10}>
                    <a href="#"><span className={`phone-text color-${props.color}`}>Twitter</span></a>
                </Col>
            </Row>
       </Fragment>
    );
}
export default TwitterText