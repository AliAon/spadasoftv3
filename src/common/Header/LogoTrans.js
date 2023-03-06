import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const LogoTrans=()=>{
    return(
        <div className="logo-img">
            <Link to="/">
            <img src="http://localhost:3000/images/logo/logo (2).png" className="logo-trans__img"/>
            </Link>
        </div>
    )
}
export default LogoTrans