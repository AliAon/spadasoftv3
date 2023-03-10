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
                    <Link to="https://www.google.com/maps/search/1772+Nevskaya+Street+NW,+Suite+21389,+Atlanta,+GA+902344/@33.7675738,-84.5602181,11z/data=!3m1!4b1"><span className={`email-text color-${props.color}`}>1772 Nevskaya Street NW, Suite 21389, Atlanta, GA 902344</span></Link>
                </Col>
            </Row>
       </Fragment>
    );
}
export default LocationAddress