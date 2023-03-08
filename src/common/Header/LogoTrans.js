import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { hostname } from "../../config"
const LogoTrans=()=>{
    console.log(hostname)
    return(
        <div className="logo-img">
            <Link to="/">
            <img src={`${hostname}/images/logo/logo (2).png`} className="logo-trans__img"/>
            </Link>
        </div>
    )
}
export default LogoTrans