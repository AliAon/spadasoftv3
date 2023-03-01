import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const MobileLogoTrans=()=>{
    return(
        <div className="logo-img">
            <Link to="/">
            <img src="./images/logo/logo (2).png" className="logo-trans__img"/>
            </Link>
        </div>
    )
}
export default MobileLogoTrans