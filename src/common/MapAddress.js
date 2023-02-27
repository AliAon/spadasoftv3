import { Fragment } from "react";
import {Row,Col} from "react-bootstrap"
import {FaMap, FaPhoneAlt} from "react-icons/fa"
import { Link } from "react-router-dom";
const MapAddress=(props)=>{
    return(
        <Fragment>
            <Row className="x-nowrap"> 
              <Col lg={props.iconwidth} xs={props.iconwidthsmall}>
                 <FaMap size={14} color={props["icon-color"]}/>
                </Col>
                <Col  lg={10} xs={10}>
                    <a><span className={`phone-text color-${props.color}`}>Lahore ,PK</span></a>
                </Col>
            </Row>
       </Fragment>
    );
}
export default MapAddress