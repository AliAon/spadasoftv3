import { Fragment } from "react";
import {Row,Col} from "react-bootstrap"
import {FaMapMarkerAlt} from "react-icons/fa"
import { Link } from "react-router-dom";
const LocationAddress=(props)=>{
    return(
        <Fragment>
            <Row>
              <Col lg={props.iconwidth} xs={props.iconwidthsmall}>
                 <FaMapMarkerAlt size={15} color={props["icon-color"]}/>
                </Col>
                <Col  lg={10} xs={10}>
                    <Link to="https://goo.gl/maps/MqrWcrrVeEeKj3oA6"><span className={`email-text color-${props.color}`}>1772 Nevskaya Street NW, Suite 21389, Atlanta, GA 902344</span></Link>
                </Col>
            </Row>
       </Fragment>
    );
}
export default LocationAddress