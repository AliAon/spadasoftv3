import { Fragment } from "react";
import {Row,Col} from "react-bootstrap"
import {FaFacebook, FaPhoneAlt} from "react-icons/fa"
import { Link } from "react-router-dom";
const FaceBookText=(props)=>{
    return(
        <Fragment>
            <Row className="x-nowrap pb--15"> 
              <Col lg={props.iconwidth} xs={props.iconwidthsmall}>
                 <FaFacebook size={14} color={props["icon-color"]}/>
                </Col>
                <Col  lg={10} xs={10}>
                    <a href="#"><span className={`phone-text color-${props.color}`}>Facebook</span></a>
                </Col>
            </Row>
       </Fragment>
    );
}
export default FaceBookText